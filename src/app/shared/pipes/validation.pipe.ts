import { Pipe, PipeTransform } from '@angular/core';
import { constant } from '../../core/constant/constant';

@Pipe({
  name: 'validation'
})
export class ValidationPipe implements PipeTransform {

  transform(key: string): unknown {
    const validation_message = constant.VALIDATION_MESSAGES as any;
    return validation_message[key];
  }

}
