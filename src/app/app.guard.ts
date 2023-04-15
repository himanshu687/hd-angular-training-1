import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AppGuard implements CanActivate {
  name: string = JSON.parse(localStorage.getItem('name'));
  canActivate() {
    return !!this.name;
  }
}
