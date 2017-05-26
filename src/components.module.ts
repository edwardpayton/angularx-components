import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './components/table/table.component';
import { TablePaginationComponent } from './components/table/table-pagination.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableComponent,
    TablePaginationComponent,
    PaginationComponent
  ],
  exports: [
    TableComponent,
    TablePaginationComponent,
    PaginationComponent
  ]
})
export class ComponentsModule {}
