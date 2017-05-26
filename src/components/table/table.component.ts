import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { ColumnConfig } from "./table-column-config";
import { TableSorting } from "./table-sorting";

@Component({
  selector: 'table-component',
  template: `
  <div class="table-responsive">
    <div *ngIf="!data">
      Loading data...
    </div>
    <table *ngIf="data" class="{{ bsCssClasses }}">
      <thead>
        <tr>
          <th *ngFor="let column of columnConfig" (click)="onOrderByEvent(column)" class="table-col-{{ column.slugName }}">
            {{ column.displayName }}
            <i class="glyphicon" [ngClass]="selectedClass(column)"></i>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let d of data | orderBy: dataOrder()">
          <td *ngFor="let column of columnConfig" [innerHtml]="d[column.slugName]"></td>
        </tr>
      </tbody>
    </table>
  </div>
  `,
  styles: []
})
export class TableComponent implements OnInit, OnDestroy {

  @Input() tableName: string;
  @Input() data: any[]; // JSON of data objects
  @Input() columnConfig: ColumnConfig[]; // Array of column objects
  @Input() bsCssClasses: string = 'table';
  @Input() sort: TableSorting;

  @Output() orderColumnEvent: EventEmitter<object> = new EventEmitter<object>();
  
  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}

  onOrderByEvent(column: ColumnConfig) {
    if(!column.isSortable) return;

    this.orderColumnEvent.emit(column); // Notify the parent

    let sort = this.sort;
    if (sort.column == column.slugName) {
      sort.descending = !sort.descending;
    } else {
      sort.column = column.slugName;
      sort.descending = false;
    }
  }

  dataOrder(): string {
    return this.sort.descending ? '-' + this.sort.column : this.sort.column;
  }

  selectedClass(column: ColumnConfig) {
    if(!column.isSortable) return 'not-sortable';

    let direction = '';
    if(column.slugName == this.sort.column) {
      if(this.sort.descending) {
        direction = '-down';
      }
      else {
        direction = '-up';
      }
    }
    return `glyphicon-chevron-${direction}`;
  }

}

export { ColumnConfig } from "./table-column-config";