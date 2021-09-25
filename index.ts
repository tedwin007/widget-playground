// Import stylesheets
import './style.css';
import { WidgetTypeEnum } from './widget/enums/widget-type-enum';
import { WidgetMangerService } from './widget/widget-manger.service';

const widgetManger = new WidgetMangerService();

const destroyListRef = widgetManger.addWidgetsList([
  {
    data: 'before changing data',
    type: WidgetTypeEnum.table,
    container: document.querySelector('#app'),
  },
  {
    data: '<p>free style, not secure</p>',
    type: WidgetTypeEnum.table,
    container: document.querySelector('#app'),
  },
]);

const id = widgetManger.getAllWidgets()[0].id;
console.log(widgetManger.getWidgetsByType(WidgetTypeEnum.table));

// data Change
setTimeout(() => {
  widgetManger.dataChange(id, '1s after change was made');
}, 1000);

//
setTimeout(() => {
  destroyListRef.forEach((item) => item());
  widgetManger.addWidgetsList([
    {
      data: 1,
      type: WidgetTypeEnum.table,
      container: document.querySelector('#app'),
    },
    {
      data: 2,
      type: WidgetTypeEnum.table,
      container: document.querySelector('#app'),
    },
  ]);
}, 1000);
