import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import { RegistroService } from 'src/app/services/registro.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.scss']
})

export class LoginBodyComponent {
  optionSelected?: string;

  constructor(private serviceRegistro: RegistroService, private router: Router, private loginService: LoginService) {
    this.optionSelected = "login";
  }

  onOptionClick(option: string) {
    this.optionSelected = option;
  }

  cliente: Cliente = {
    idCliente: 0,
    nombreCompleto: "",
    apellido: "",
    telefono: "",
    dni: "",
    email: "",
    direccion: "",
    password: "",
  };

  submitRegister() {
    this.serviceRegistro.registerClient(this.cliente).subscribe({
      next: data => { console.log(data); },
      error: (error) => {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          confirmButtonColor: "#2A2C31",
          text: 'Algo ha salido mal, inténtalo más tarde',
        })
      },
      complete: () => {
        Swal.fire("Registro exitoso", "Usted ha sido registrado correctamente", "success")
        this.router.navigate(['home']);
      }
    })

  }

  //PARA EL LOGIN
  user: User = {
    username: '',
    password: '',
  };


  submitLogin() {
    this.loginService.generateToken(this.user).subscribe({
      next: (data: any) => {
        this.loginService.loginUser(data.token) //POR EL CONTENIDO QUE ME DA LA RESPUESTA EN MI BACK
        console.log(data.token);
        this.loginService.getCurrentClient().subscribe((cliente: any) => {
          this.loginService.setClient(cliente);
          console.log(cliente);
        })
        Swal.fire("Inicio de sesión", "Usted ha iniciado sesión correctamente", "success")
        this.router.navigate(['home']);

      },
      error: (error) => {
        alert("ERROR AL INGRESAR")
        console.log(error)
      }
    });
  }

}
