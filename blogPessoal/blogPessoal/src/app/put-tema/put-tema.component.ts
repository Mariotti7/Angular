import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-put-tema',
  templateUrl: './put-tema.component.html',
  styleUrls: ['./put-tema.component.css'],
})
export class PutTemaComponent implements OnInit {
  tema: Tema = new Tema();

  constructor(
    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    window.scroll(0, 0);

    let id: number = this.route.snapshot.params['id'];
    this.findByIdTema(id);
  }
  findByIdTema(id: number) {
    this.temaService.getByIdTema(id).subscribe((resp: Tema) => {
      this.tema = resp;
    });
  }

  salvar() {
    this.temaService.putTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp;
      this.router.navigate(['/cadastro-tema']);
      alert('Alteração realizada com sucesso!');
    });
  }
}
