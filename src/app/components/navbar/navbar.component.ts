import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SearchService } from 'src/app/services/search.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public searchInput: string;

  constructor(public loginService: LoginService, public searchService: SearchService, private router: Router) {
    this.searchInput = "";
  }

  logOutButton() {
    this.loginService.logOut();
    Swal.fire("Sesión cerrada", "Usted ha cerrado la sesión correctamente", "success");
  }

  onSearch() {
    this.searchService.setSharedBookName(this.searchInput);

    this.searchService.doSearchSubject.next(true);

    this.router.navigate(['search']);
  }
}
