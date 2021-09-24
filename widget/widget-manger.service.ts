import { WidgetTypeEnum } from './enums/widget-type-enum';
import { BaseWidget } from './model/abstract-base-widget.class';
import { RawData } from './model/widget.interface';
import { TableWidget } from './widget-types';
export type AddWidgetConfig = {
  data?: RawData;
  type: WidgetTypeEnum;
  container: HTMLBaseElement;
};

export class WidgetMangerService<T = any> {
  widgets = new Map<string, BaseWidget>();
  data: T = <any>{ data: (Math.random() + 1).toString() };

  constructor() {
    this.fetchData('').then((res: T) => (this.data = res));
  }

  getAllWidgets(): BaseWidget[] {
    return Array.from(this.widgets.values());
  }

  getWidgetById(widgetId: string): BaseWidget {
    return this.widgets.get(widgetId);
  }

  getWidgetsByType(widgetType: WidgetTypeEnum) {
    return this.getAllWidgets().filter((item) => item.type === widgetType);
  }

  removeWidget(widgetId: string) {
    this.widgets.delete(widgetId);
  }

  /**
   * Mocking
   */
  fetchData(id: string, config?: Request): Promise<T> {
    return new Promise((resolve, reject) => {
      resolve(<any>{ data: (Math.random() + 1).toString() });
    });
  }

  addSingleWidget(config: AddWidgetConfig): Function {
    switch (config.type) {
      case WidgetTypeEnum.table:
        const widg: BaseWidget = new TableWidget(config.data ?? this.data);
        this.widgets.set(widg.id, widg);
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
