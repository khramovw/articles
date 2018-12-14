import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicetext'
})
// This Pipe truncates the string according to the specified parameters, and add a final ellipsis at the end.
export class SlicetextPipe implements PipeTransform {
  transform(value: string, start: number = 0, end: number, stub: string): string {
    return value && value.length > end ? value.slice(start, end) + stub : value;
  }
}
