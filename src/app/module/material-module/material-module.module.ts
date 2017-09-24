import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
   MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdNativeDateModule,
   MdToolbarModule, MdExpansionModule, MdFormFieldModule, MdInputModule, MdCardModule, MdIconModule, MdProgressBarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule, MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdNativeDateModule, MdToolbarModule, MdExpansionModule, MdFormFieldModule, MdInputModule, MdCardModule, FormsModule, ReactiveFormsModule, MdIconModule, MdProgressBarModule
  ],
  exports: [
    CommonModule, MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdNativeDateModule, MdToolbarModule, MdExpansionModule, MdFormFieldModule, MdInputModule, MdCardModule, FormsModule, ReactiveFormsModule, MdIconModule, MdProgressBarModule
  ],
  declarations: []
})
export class MaterialModule { }
