// Import stylesheets
import './style.css';
import { WidgetTypeEnum } from './widget/enums/widget-type-enum';
import { WidgetMangerService } from './widget/widget-manger.service';

const widgetManger = new WidgetMangerService();

const destroyListRef = widgetManger.addWidgetsList([
  {
    data: 123,
    type: WidgetTypeEnum.table,
    container: document.querySelector('#app'),
  },
  {
    data: {},
    type: WidgetTypeEnum.table,
    container: document.querySelector('#app'),
  },
]);

setTimeout(() => destroyListRef.forEach((item) => item()), 1500);
