import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SlicerPipe'
})
export class SlicerPipe implements PipeTransform {
  transform(value: any, args: any): any {
    return;
  }
}
