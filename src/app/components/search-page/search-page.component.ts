import { Component, Input } from '@angular/core';
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
  universityReponse: UniversityResponse[] = [];

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
    if (!this.selectedCountryValue && !this.inputCountry) {
      alert('Please provide the country.');
      return;
    }

    if (this.selectedCountryValue && this.inputCountry) {
      alert('Please provide one country value.');
      return;
    }

    this.appService
      .getUniversities(this.selectedCountryValue || this.inputCountry)
      .subscribe((response: UniversityResponse[]) => {
        console.log('response: ', response);

        this.universityReponse = response;
      });

    console.log('universityReponse in search page: ', this.universityReponse);
  }
}
