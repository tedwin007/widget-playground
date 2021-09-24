export interface IWidget<WidgetDataType> {
  id: string;
  data: WidgetDataType;
  render(container: HTMLBaseElement): void;
}

export type RawData = any;
