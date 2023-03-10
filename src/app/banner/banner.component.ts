import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonaServicio } from '../persona.servicio';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit{
  // persona:Persona;

  // constructor(private personaServicio:PersonaServicio){}

  // ngOnInit(): void {
  //     this.persona = this.personaServicio.persona;
  // }

  persona : Persona = new Persona("","","","","","","","","","","","");
  
  constructor(public personaService :PersonaServicio){}

  ngOnInit(): void {
    this.cargarPersona();
  }

  cargarPersona(){
    this.personaService.detail(1).subscribe(
      data => {
        this.persona = data
      }
    )
  }
}
