import { WidgetTypeEnum } from './enums/widget-type-enum';
import { RawData } from './model/widget.interface';
import { TableWidget } from './widget-types';
export type AddWidgetConfig = {
  data?: RawData;
  type: WidgetTypeEnum;
  container: HTMLBaseElement;
};

export class WidgetMangerService<T = any> {
  widgets = [];
  data: T = <any>{ data: (Math.random() + 1).toString() };

  constructor() {
    this.fetchData('').then((res: T) => {
      this.data = res;
    });
  }

  fetchData(id: string, config?: Request): Promise<T> {
    return new Promise((resolve, reject) => {
      resolve(<any>{ data: (Math.random() + 1).toString() });
    });
  }

  addSingleWidget(config: AddWidgetConfig): Function {
    switch (config.type) {
      case WidgetTypeEnum.table:
        const widg = new TableWidget(config.data ?? this.data);
        this.widgets.push(widg);
        return widg.render(config.container);
      default:
        console.log('unknown type');
    }
  }

  addWidgetsList(list: AddWidgetConfig[]): Function[] {
    return list.map((widgetConf: AddWidgetConfig) => {
      return this.addSingleWidget(widgetConf);
    });
  }
}
