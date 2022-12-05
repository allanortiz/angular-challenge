import { Component, Input } from '@angular/core';

type ColumnType = 'string' | 'image_url';

export type ColumnProps = {
  [key: string]: {
    type: ColumnType;
    name: string;
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
}
