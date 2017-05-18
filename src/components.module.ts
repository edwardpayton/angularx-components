import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './components/table/table.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableComponent
  ],
  exports: [
    TableComponent
    
  ]
})
export class ComponentsModule {}
