import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  name: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (!this.name) {
      alert('Please provide the name to continue!');
      return;
    }

    localStorage.setItem('name', JSON.stringify(this.name));
    localStorage.setItem('searchCount', JSON.stringify(0));
    this.router.navigate(['home']);
  }

  onCancel() {
    this.name = '';
  }
}
