import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdNativeDateModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdNativeDateModule
  ],
  exports: [
    CommonModule, MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdNativeDateModule
  ],
  declarations: []
})
export class MaterialModule { }
