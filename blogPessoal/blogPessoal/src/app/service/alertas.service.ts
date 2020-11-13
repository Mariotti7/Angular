import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private bsModalService: BsModalService) { }

  private showAlert(message: string, type: string){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertasComponent) //vai mostrar o que está no componente
    bsModalRef.content.type = type //Modal que contem um tipo que recebe tipo
    bsModalRef.content.message = message //Modal que contem uma mensagem que recebe mensagem
  }

  //metodos de mensagem de alertas

  showAlertDanger(message: string){
    this.showAlert(message, 'danger') //vai mostrar a mensagem com cor(vermelha)
  }

  showAlertSuccess(message: string){
    this.showAlert(message, 'success') //vai mostrar a mensagem com cor(verde)
  }

  showAlertInfo(message: string){
    this.showAlert(message, 'info') //vai mostrar a mensagem com cor(azul)
  }

}
