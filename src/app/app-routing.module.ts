import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginRegisterComponent } from './views/login-register/login-register.component';
import { SearchComponent } from './views/search/search.component';
import { DetailsComponent } from './views/details/details.component';
import { CarritoComponent } from './views/carrito/carrito.component';
import { MypurchasesComponent } from './views/mypurchases/mypurchases.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent}, 
  { path: 'login-register', component: LoginRegisterComponent },
  { path: 'booksdetails/:id', component: DetailsComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'miscompras', component: MypurchasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
