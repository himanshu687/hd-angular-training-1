import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  name: string = '';

  onSubmit() {
    if (!this.name) return;
    
    console.log(this.name);
  }

  onCancel() {
    this.name = '';
  }
}
