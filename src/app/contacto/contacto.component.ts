import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent {

  //******************************************************************************
  // *                           Copiar al portapapeles
  // *****************************************************************************
  public copiarAlPortapapeles(id_elemento: string) {
    // Crea un campo de texto "oculto"
    let aux = document.createElement('input');
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute('value', document.getElementById(id_elemento).innerHTML);
    // Añade el campo a la página
    document.body.appendChild(aux);
    // Selecciona el contenido del campo
    aux.select();
    // Copia el texto seleccionado
    document.execCommand('copy');
    // Elimina el campo de la página
    document.body.removeChild(aux);
  }


}