import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountNumber'
})
export class AccountNumberPipe implements PipeTransform {

  transform(accountNumber: string, accountLength?: number): string {

    if (accountLength && accountNumber.length !== accountLength) {
      return '!!INVALID ACCOUNT!!';
    }

    return accountNumber.substr(0,4).padEnd(accountNumber.length, '*');
  }

}
