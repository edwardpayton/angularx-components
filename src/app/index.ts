import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DemoComponent } from './demo/demo.component';

import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    DemoComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    TableComponent
  ]
})
export class AppModule { }

export * from './components/table/table.component';
