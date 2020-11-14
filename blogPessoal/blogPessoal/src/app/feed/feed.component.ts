import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { PostegemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  titulo: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  nomeTema: string

  key = 'data'
  reverse = true

  constructor(
    private postagemService: PostegemService,
    private temaService: TemaService,
    private alert: AlertasService,
    private router: Router
    
    ) { }

  ngOnInit(){
    window.scroll(0, 0)

    let token = environment.token

    if(token == ''){
      this.router.navigate(['/login'])
      this.alert.showAlertInfo('Faça login Antes de Acessar o Feed')
    }
    
    this.findAllPostagens()
    this.findAllTemas()
  }

  findAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) =>{
      this.listaPostagens = resp
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    if(this.postagem.titulo == null || this.postagem.texto == null || this.postagem.tema == null){
      this.alert.showAlertDanger('Preencha Todos Os Campos Antes De Publicar!')
    }else{
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) =>{
        this.postagem = resp
        this.postagem = new Postagem() //inserir um novo post sem apagar o que já fez
        this.alert.showAlertSuccess('Postagem Realizada Com Sucesso!')
        this.findAllPostagens()
      })
    }
  }

  findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  findByTituloPostagem(){
    if(this.titulo === ' '){
      this.findAllPostagens()
    }else{
      this.postagemService.getByTituloPostagem(this.titulo).subscribe((resp: Postagem[])=>{
        this.listaPostagens = resp
      })
    }
  }

  findByNomeTema(){
    if(this.nomeTema === ' '){
      this.findAllTemas()
    }else{
      this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[])=>{
        this.listaTemas = resp
      })
    }
  }

}
