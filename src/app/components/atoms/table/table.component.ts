import { Component, Input, Output, EventEmitter } from '@angular/core';

type ColumnType = 'string' | 'image_url' | 'link';

export type ColumnProps = {
  [key: string]: {
    type: ColumnType;
    name: string;
    url?: string;
  };
};

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() dataSource: any[] = [];
  @Input() displayedColumns: string[] = [];
  @Input() columnProps: ColumnProps = {};

  @Output() rowClick: EventEmitter<any> = new EventEmitter<any>();
}
