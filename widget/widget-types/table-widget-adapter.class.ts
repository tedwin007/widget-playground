import { WidgetTypeEnum } from '../enums/widget-type-enum';
import { WidgetAdapter } from '../model/abstract-widget-adapter.class';

/** mock Adoptor */
export class TableWidgetAdopter extends WidgetAdapter {
  adapt(data: any) {
    return data;
  }

  isValid(type: WidgetTypeEnum, data: any): boolean {
    return true;
  }
}
