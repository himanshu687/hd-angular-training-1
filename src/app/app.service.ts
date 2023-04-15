import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  URL: string = 'http://universities.hipolabs.com';

  constructor(private http: HttpClient) {}

  getUniversities(name: string) {
    this.http
      .get(this.URL + '/search?country=' + name)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
