import { WidgetTypeEnum } from '../enums/widget-type-enum';

export abstract class WidgetAdapter<I = any, O = any> {
  abstract adapt(data: I): O;
  abstract isValid(type: WidgetTypeEnum, data: I): boolean;
}
