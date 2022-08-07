import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resultSize',
})
export class ResultSizePipe implements PipeTransform {
  public transform(value: string): string {
    return value == 'not-found' ? 'Not found' : value.replace('-', ' or ');
  }
}
