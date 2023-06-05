import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginRegisterComponent } from './views/login-register/login-register.component';
import { SearchComponent } from './views/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  { path: 'home', component: SearchComponent}, // solo para debug, usar la linea de arribe en su lugar
  { path: 'login-register', component: LoginRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
