import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-perfil-lateral',
  templateUrl: './perfil-lateral.component.html',
  styleUrls: ['./perfil-lateral.component.css']
})
export class PerfilLateralComponent implements OnInit {

  userName: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(){
  this.userName.usuario = localStorage.getItem('usuario')
  }

  user(){
    this.auth.logar(this.userName).subscribe((resp: UserLogin)=>{
      this.userName = resp
      localStorage.setItem('usuario', this.userName.usuario)
    })
  }
  

}
