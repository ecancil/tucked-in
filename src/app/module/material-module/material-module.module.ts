import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
   MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdNativeDateModule,
   MdToolbarModule, MdExpansionModule, MdFormFieldModule, MdInputModule, MdCardModule, MdIconModule,
   MdProgressBarModule, MdAutocompleteModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule, MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdNativeDateModule, MdToolbarModule, MdExpansionModule, MdFormFieldModule, MdInputModule, MdCardModule, FormsModule, ReactiveFormsModule, MdIconModule, MdProgressBarModule, MdAutocompleteModule
  ],
  exports: [
    CommonModule, MdButtonModule, MdCheckboxModule, MdDatepickerModule, MdNativeDateModule, MdToolbarModule, MdExpansionModule, MdFormFieldModule, MdInputModule, MdCardModule, FormsModule, ReactiveFormsModule, MdIconModule, MdProgressBarModule, MdAutocompleteModule
  ],
  declarations: []
})
export class MaterialModule { }
