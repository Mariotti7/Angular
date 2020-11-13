import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  //receber parametros de outros componentes
  @Input() message: string
  @Input() type = 'success'

  //adicionar service
  constructor(public modal: BsModalRef) { }

  ngOnInit(): void {
  }

  //um metodo para fechar o modal no x que aparecer
  onClose(){
    this.modal.hide()
  }
  
}
