import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { ColumnConfig } from "./table-column-config";

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
          <th *ngFor="let column of columnConfig" (click)="onOrderBy(column)" class="table-col-{{ column.slugName }}">
            {{ column.displayName }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let d of data">
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

  @Output() orderColumnEvent: EventEmitter<object> = new EventEmitter<object>();

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {}

  onOrderByEvent(column: object) {
    this.orderColumnEvent.emit(column);
  }

}

export { ColumnConfig } from "./table-column-config";