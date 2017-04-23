import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * SharedModule to hold the common components, directives, and pipes
 * share them with the modules that need them.
 */
@NgModule({
  exports:[
    CommonModule,
    FormsModule
  ],
  declarations: []
})
export class SharedModule { }
