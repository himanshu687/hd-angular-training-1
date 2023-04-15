import { Component } from '@angular/core';
import { CountryDropdown } from 'src/app/Interface/CountryDropdown';

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
}
