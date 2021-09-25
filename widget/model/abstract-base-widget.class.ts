import { Utils } from '../../utils';
import { WidgetTypeEnum } from '../enums/widget-type-enum';
import { WidgetAdapter } from './abstract-widget-adapter.class';
import { IWidget, RawData } from './widget.interface';

export abstract class BaseWidget<WDT = any> implements IWidget<WDT> {
  id: string;
  data: WDT;
  type: WidgetTypeEnum;
  htmlContainerElement: HTMLBaseElement;
  abstract htmlTemplate: (data: WDT) => string;
  abstract adoptor: WidgetAdapter;

  template(data: WDT): string {
    // sanitize not implamented, see comments in the utils file
    return Utils.sanitize(
      `<div class="${this.id} widget">${this.htmlTemplate(data)}</div>.`
    );
  }

  constructor(data: RawData, type: WidgetTypeEnum, adoptor: WidgetAdapter) {
    this.type = type;
    if (!adoptor.isValid(type, data)) {
      throw new Error('Invalid data to type' + type);
    }
    this.setId(type);
    this.data = adoptor.adapt(data);
  }

  render(container: HTMLBaseElement): Function {
    const template = this.template(this.data);
    container.insertAdjacentHTML('afterbegin', `${template}`);
    this.htmlContainerElement = container;
    return this.destroy(container);
  }

  private destroy(parent: HTMLBaseElement): Function {
    const container = parent;
    return function () {
      container.innerHTML = '';
      console.log('component was removed from dom');
    };
  }

  private setId(type: WidgetTypeEnum): void {
    this.id = Date.now() + Math.random().toPrecision(1) + 1 + '_' + type;
  }
}
