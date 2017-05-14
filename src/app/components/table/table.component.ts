import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { TableColumns } from "./table-columns";

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styles: []
})
export class TableComponent implements OnInit, OnDestroy {

  @Input() tableName: string;
  @Input() data: any[];
  @Input() columns: TableColumns[];
  @Input() filter: string = '';

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}

}

export { TableColumns } from "./table-columns";