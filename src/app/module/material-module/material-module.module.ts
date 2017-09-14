import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdNativeDateModule,
	MdToolbarModule, MdExpansionModule, MdFormFieldModule, MdInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdNativeDateModule, MdToolbarModule, MdExpansionModule, MdFormFieldModule, MdInputModule
  ],
  exports: [
    CommonModule, MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdNativeDateModule, MdToolbarModule, MdExpansionModule, MdFormFieldModule, MdInputModule
  ],
  declarations: []
})
export class MaterialModule { }
