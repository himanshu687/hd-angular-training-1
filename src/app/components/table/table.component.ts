import {
  AfterViewInit,
  Component,
  ViewChild,
  OnInit,
  Input,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UniversityResponse } from 'src/app/Interface/UniversityResponse';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit, OnInit {
  @Input() universities: UniversityResponse[];
  @Input() dataSource: MatTableDataSource<UniversityResponse>;

  startIndex = 0;

  // UNIVERSITY_DATA: UniversityResponse[] = [];

  displayedColumns: string[] = [
    'sno',
    'name',
    'state-province',
    'universityDomain',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {}

  onPageChange(event: PageEvent) {
    this.startIndex = event.pageIndex * event.pageSize;
  }
}
