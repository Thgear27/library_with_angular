import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public loginService: LoginService) {

  }

  logOutButton() {
    this.loginService.logOut(); 
    Swal.fire("Sesión cerrada", "Usted ha cerrado la sesión correctamente", "success");
  }
}
