import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { ReactiveFormsModule }    from '@angular/forms';
import { HeaderModule } from '../header/header.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderModule
  ],
  declarations: [DetailComponent]
})
export class DetailModule { }
