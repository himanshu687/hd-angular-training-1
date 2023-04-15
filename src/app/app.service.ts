import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UniversityResponse } from './Interface/UniversityResponse';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  URL: string = 'http://universities.hipolabs.com';

  constructor(private http: HttpClient) {}

  getUniversities(name: string) {
    console.log('name: ', name);

    return this.http.get(this.URL + '/search?country=' + name);
  }
}
