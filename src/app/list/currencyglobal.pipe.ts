import { Pipe, PipeTransform, LOCALE_ID, Inject } from '@angular/core';
import { getLocaleCurrencySymbol, getLocaleCurrencyName } from
  '@angular/common';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'CustomCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {
  constructor( @Inject(LOCALE_ID) public locale: string, private currencyPipe: CurrencyPipe) {
  }

  transform(value: object): any {
   let v = Math.round(value['amount'] ) / 100;
    return this.currencyPipe.transform(v.toFixed(2),  value['currency'], getLocaleCurrencySymbol(this.locale));
  }

}