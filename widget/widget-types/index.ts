import { Utils } from '../../utils';
import { WidgetTypeEnum } from '../enums/widget-type-enum';
import { BaseWidget } from '../model/abstract-base-widget.class';
import { RawData } from '../model/widget.interface';
import { TableWidgetAdopter } from './table-widget-adapter.class';

export class TableWidget<ITableWidget> extends BaseWidget<ITableWidget> {
  htmlTemplate = (data?: any) => `Hi THis is the data ${JSON.stringify(data)}`;
  constructor(
    data: RawData,
    public adoptor: TableWidgetAdopter = new TableWidgetAdopter()
  ) {
    super(data, WidgetTypeEnum.table, adoptor);
  }
}
