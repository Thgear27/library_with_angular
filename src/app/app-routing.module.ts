import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginRegisterComponent } from './views/login-register/login-register.component';
import { SearchComponent } from './views/search/search.component';
import { DetailsComponent } from './views/details/details.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent}, 
  { path: 'login-register', component: LoginRegisterComponent },
  { path: 'booksdetails/:id', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
