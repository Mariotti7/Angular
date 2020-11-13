import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  user: User = new User()
  senha: string

  constructor(
    private authSevice: AuthService,
    private router: Router,
    private alert: AlertasService
  ) { }

  ngOnInit() {
  }

  conferirSenha(event: any){
    this.senha = event.target.value
  }
  cadastrar(){
    if(this.senha === this.user.senha){
    this.authSevice.cadastrar(this.user).subscribe((resp: User)=>{
    this.user = resp
    this.router.navigate(['/login'])
    this.alert.showAlertSuccess('Usuário cadastrado com sucesso!!!')
    })
    }else{
      this.alert.showAlertDanger('Suas senhas não conferem')
    }
  }

}