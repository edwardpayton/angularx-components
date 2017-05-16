import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './components/table/table.component';

export * from './components/table/table.component';

import { DemoComponent } from 'demo/demo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableComponent,
    DemoComponent
  ],
  exports: [
    TableComponent
  ]
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComponentsModule,
      providers: []
    };
  }
}
