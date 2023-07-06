import { Component, OnInit } from '@angular/core';
import { NgControlStatusGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { every } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { SearchService } from 'src/app/services/search.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public searchInput: string;

  constructor(
    public loginService: LoginService,
    public searchService: SearchService,
    private router: Router
  ) {
    this.searchInput = '';
  }

  ngOnInit(): void {
    var oldScrollY = window.scrollY;
    var navbar = document.querySelector('[data-nav-bar]');
    window.onscroll = function (e) {
      if (oldScrollY < window.scrollY) {
        navbar?.setAttribute('scrolled', 'down')
      } else {
        navbar?.setAttribute('scrolled', 'up')
      }
      oldScrollY = window.scrollY;
    };
  }

  logOutButton() {
    this.loginService.logOut();
    Swal.fire({
      icon: 'success',
      title: 'Sesión cerrada',
      text: 'Usted ha cerrado la sesión correctamente',
      confirmButtonColor: '#24292E',
    });
  }

  onSearch() {
    this.searchService.setSharedBookName(this.searchInput);

    this.searchService.doSearchSubject.next(true);

    this.router.navigate(['search']);
  }

  toggleMobileMenu() {
    let menuShown = document.querySelector('[data-menu-mobile]');
    let currentAttribute = menuShown?.getAttribute('show-menu');
    if (currentAttribute == 'false') {
      menuShown?.setAttribute('show-menu', 'true');
    } else {
      menuShown?.setAttribute('show-menu', 'false');
    }
  }
}
