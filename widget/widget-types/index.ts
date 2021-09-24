import { WidgetTypeEnum } from '../enums/widget-type-enum';
import { BaseWidget } from '../model/abstract-base-widget.class';
import { RawData } from '../model/widget.interface';
import { TableWidgetAdopter } from './table-widget-adopter.class';

export class TableWidget<ITableWidget> extends BaseWidget<ITableWidget> {
  constructor(
    data: RawData,
    public adoptor: TableWidgetAdopter = new TableWidgetAdopter()
  ) {
    super(data, WidgetTypeEnum.table, adoptor);
  }

  template(data: ITableWidget): string {
    return `<p>Hi THis is the data ${JSON.stringify(data)}</p>.`;
  }
}
