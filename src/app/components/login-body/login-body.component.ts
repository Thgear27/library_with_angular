import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-login-body',
  templateUrl: './login-body.component.html',
  styleUrls: ['./login-body.component.scss']
})

export class LoginBodyComponent {
  optionSelected?: string;

  constructor(private serviceRegistro:RegistroService) {
    this.optionSelected = "login";
  }

  onOptionClick(option: string) {
    this.optionSelected = option; 
  }

  cliente:Cliente={
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
    this.serviceRegistro.registrarCliente(this.cliente).subscribe((data:Cliente) =>{
      this.cliente=data;
    },(error)=>{
      console.log(error)
    })
    alert("REGISTRO EXITOSO");
  }

}
