import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeBodyComponent } from './components/home-body/home-body.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarOnlyLogoComponent } from './components/navbar-only-logo/navbar-only-logo.component';
import { LoginBodyComponent } from './components/login-body/login-body.component';
import { HomeComponent } from './views/home/home.component';
import { LoginRegisterComponent } from './views/login-register/login-register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { SearchBodyComponent } from './components/search-body/search-body.component';
import { SearchComponent } from './views/search/search.component';
import { BooksGridComponent } from './components/books-grid/books-grid.component';
import { DetailsBodyComponent } from './components/details-body/details-body.component';
import { DetailsComponent } from './views/details/details.component';
import { CarritoBodyComponent } from './components/carrito-body/carrito-body.component';
import { CarritoComponent } from './views/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeBodyComponent,
    FooterComponent,
    NavbarOnlyLogoComponent,
    LoginBodyComponent,
    HomeComponent,
    LoginRegisterComponent,
    SearchBodyComponent,
    SearchComponent,
    BooksGridComponent,
    DetailsBodyComponent,
    DetailsComponent,
    CarritoBodyComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS, useClass: AuthInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
