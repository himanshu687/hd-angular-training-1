import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { AppGuard } from './app.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: SearchPageComponent, canActivate: [AppGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
