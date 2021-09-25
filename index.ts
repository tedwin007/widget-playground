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

// getting some widget id for test
let id = widgetManger.getAllWidgets()[0].id;
// getting all widget with a specific type
console.log(widgetManger.getWidgetsByType(WidgetTypeEnum.table));
// destroying all widgets views the
setTimeout(() => destroyListRef.forEach((item) => item()), 1000);
// data Change
setTimeout(() => widgetManger.dataChange(id, '2s after change was made'), 2000);
