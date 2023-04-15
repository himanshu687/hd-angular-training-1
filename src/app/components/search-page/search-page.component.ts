import { Component, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { CountryDropdown } from 'src/app/Interface/CountryDropdown';
import { UniversityResponse } from 'src/app/Interface/UniversityResponse';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  name: string = JSON.parse(localStorage.getItem('name'));
  selectedCountryValue: string = '';
  inputCountry: string = '';
  searchCount: number = JSON.parse(localStorage.getItem('searchCount'));
  searchMsg: string = 'No data to show';
  isLoading: boolean = false;

  universityResponse: UniversityResponse[] = [];
  dataSource = new MatTableDataSource<UniversityResponse>([]);

  constructor(private appService: AppService) {}

  countries: CountryDropdown[] = [
    { name: 'India', value: 'India' },
    { name: 'Japan', value: 'Japan' },
    { name: 'United Kingdom', value: 'United Kingdom' },
    { name: 'United States', value: 'United States' },
    { name: 'Canada', value: 'Canada' },
    { name: 'Singapore', value: 'Singapore' },
    { name: 'Germany', value: 'Germany' },
    { name: 'Australia', value: 'Australia' },
  ];

  onSearchClick() {
    this.isLoading = true;
    console.log('true');

    if (!this.selectedCountryValue && !this.inputCountry) {
      alert('Please provide the country.');
      this.isLoading = false;
      return;
    }

    if (this.selectedCountryValue && this.inputCountry) {
      alert('Please provide one country value.');
      this.isLoading = false;

      return;
    }

    this.appService
      .getUniversities(this.inputCountry || this.selectedCountryValue)
      .subscribe((response: UniversityResponse[]) => {
        if (response.length === 0) {
          this.searchMsg = 'No University found.';
          this.isLoading = false;
          return;
        }

        this.universityResponse = response;
        this.dataSource.data = response;

        this.isLoading = false;
      });

    this.searchCount += 1;
    localStorage.setItem('searchCount', JSON.stringify(this.searchCount));
  }
}
