import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UniversityResponse } from 'src/app/Interface/UniversityResponse';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements AfterViewInit, OnInit {
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

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    // this.appService.getUniversities('India');
  }
}
