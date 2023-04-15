import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UniversityResponse } from './Interface/UniversityResponse';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  URL: string = 'http://universities.hipolabs.com';

  constructor(private http: HttpClient) {}

  getUniversities(name: string) {
    return this.http.get(this.URL + '/search?country=' + name);
  }
}
