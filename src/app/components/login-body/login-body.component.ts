import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.scss']
})

export class LoginBodyComponent {
  optionSelected?: string;

  constructor(private serviceRegistro:RegistroService,private router:Router) {
    this.optionSelected = "login";
  }

  onOptionClick(option: string) {
    this.optionSelected = option; 
  }

  public cliente:Cliente={
    idCliente:0,
    nombreCompleto:"",
    apellido:"",
    telefono:"",
    dni:"",
    email:"",
    direccion:"",
    password:"",
  };

  registrarse(){
    this.serviceRegistro.registrarCliente(this.cliente).subscribe(data =>{
      this.router.navigate(['home']);
    },(error)=>{
      console.log(error)
    })
    alert("REGISTRO EXITOSO");
  }

}
