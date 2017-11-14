import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { JsonPipe } from '@angular/common';

import { TableComponent } from './table.component';

@Component({
  selector: 'table-pagination-component',
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
        <tr *ngFor="let d of data">
          <td *ngFor="let column of columnConfig" [innerHtml]="d[column.slugName]"></td>
        </tr>
      </tbody>
    </table>
  </div>

  <pagination-component></pagination-component>
  `,
  styles: []
})
export class TablePaginationComponent extends TableComponent implements OnInit, OnDestroy {

  constructor() {
    super();
  }

  ngOnInit() {}

  ngOnDestroy() {}
}

export { ColumnConfig } from "./table-column-config";
