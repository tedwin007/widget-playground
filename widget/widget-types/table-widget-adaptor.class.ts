import { WidgetTypeEnum } from '../enums/widget-type-enum';
import { WidgetAdaptor } from '../model/abstract-widget-adapter.class';

/** mock Adoptor */
export class TableWidgetAdopter extends WidgetAdaptor {
  adapt(data: any) {
    return data;
  }
  isValid(type: WidgetTypeEnum, data: any): boolean {
    return true;
  }
}
