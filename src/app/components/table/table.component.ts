import {
  AfterViewInit,
  Component,
  ViewChild,
  OnInit,
  Input,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UniversityResponse } from 'src/app/Interface/UniversityResponse';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit, OnInit {
  @Input() universities: UniversityResponse[];

  UNIVERSITY_DATA: UniversityResponse[] = [];

  displayedColumns: string[] = [
    'sno',
    'name',
    'state-province',
    'universityDomain',
  ];

  dataSource = new MatTableDataSource<UniversityResponse>(this.UNIVERSITY_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.UNIVERSITY_DATA = this.universities;
  }
}
