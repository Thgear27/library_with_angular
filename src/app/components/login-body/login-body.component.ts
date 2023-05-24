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

  constructor(private serviceRegistro:RegistroService,private router:Router,private loginService:LoginService) {
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
    this.serviceRegistro.registrarCliente(this.cliente).subscribe(data =>{
      this.router.navigate(['home']);
    },(error)=>{
      console.log(error)
    })
    Swal.fire("REGISTRO EXITOSO","REGISTRO EXITOSO","success")
  }

  //PARA EL LOGIN

  user:User={
    username:'',
    password:'',
  };


  login(){
    this.loginService.generateToken(this.user).subscribe((data:any) =>{
      this.loginService.loginUser(data.token) //POR EL CONTENIDO QUE ME DA LA RESPUESTA EN MI BACK
      console.log(data.token);
      this.loginService.getActualCliente().subscribe((cliente:any)=>{
        this.loginService.setClient(cliente);
        console.log(cliente);
      })
      //alert("INGRESO COMPLETO")
      Swal.fire("LOGIN EXITOSO","LOGIN EXITOSO","success")
      this.router.navigate(['home']);
      
      
    },(error) =>{
      alert("ERROR AL INGRESAR")
      console.log(error)
    })
    
  }



}
