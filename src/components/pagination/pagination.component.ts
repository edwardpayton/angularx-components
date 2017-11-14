import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pagination-component',
  //templateUrl: './pagination.component.html',
  template: `
    <button (click)="previousPage()" [disabled]="isNotFirst()">{{ previousText }}</button>
    <button (click)="nextPage()" [disabled]="isNotLast()">{{ nextText }}</button>

    <p>page {{ page }} of {{ pageCount }}</p>
  `,
  styles: []
})
export class PaginationComponent implements OnInit {

  @Input() nextText: string = 'Next';
  @Input() previousText: string = 'Previous';
  @Input() pageCount: number;
  @Input() pageCurrent: number;

  @Output() pageChangeEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  onPageUp() {
    this.pageCurrent++;
    this.pageChangeEvent.emit(this.pageCurrent);
  }

  onPageDown() {
    this.pageCurrent--;
    this.pageChangeEvent.emit(this.pageCurrent);
  }

  onPageSelect(page: number) {
    this.pageCurrent = page;
    this.pageChangeEvent.emit(this.pageCurrent);
  }

  isNotFirst(): boolean { return this.pageCurrent !== 0; }

  isNotLast(): boolean { return this.pageCurrent !== this.pageCount; }
}
