import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { PrettyPrintPipe } from "./prettyprint.pipe";
import { CustomCurrencyPipe } from "./currencyglobal.pipe";
import { HeaderModule } from '../header/header.module';
import { ReactiveFormsModule }    from '@angular/forms';


import { LOCALE_ID } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-GB' },CustomCurrencyPipe],
  declarations: [ListComponent,PrettyPrintPipe,CustomCurrencyPipe]
})
export class ListModule { }
