// Import stylesheets
import './style.css';
import { WidgetTypeEnum } from './widget/enums/widget-type-enum';
import { WidgetMangerService } from './widget/widget-manger.service';

const widgetManger = new WidgetMangerService();

const destroyListRef = widgetManger.addWidgetsList([
  {
    data: 'sdfsdfsdf',
    type: WidgetTypeEnum.table,
    container: document.querySelector('#app'),
  },
  {
    data: '<p>sdf</p>',
    type: WidgetTypeEnum.table,
    container: document.querySelector('#app'),
  },
]);

console.log(widgetManger.getWidgetsByType(WidgetTypeEnum.table));

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
