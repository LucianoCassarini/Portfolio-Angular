import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner/banner.component';
import { WhoAmIComponent } from './who-am-i/who-am-i.component';
import { WorkComponent } from './work/work.component';
import { AcreditationsComponent } from './acreditations/acreditations.component';
import { WorkServicio } from './work/work.servicio';
import { SkillsComponent } from './skills/skills.component';
import { LearningComponent } from './learning/learning.component';
import { WorkedComponent } from './worked/worked.component';
import { LearningServicios } from './learning/learning.servicio';
import { WorkedServicios } from './worked/worked.servicio';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ProyectoServicios } from './proyectos/proyecto.servicio';
import { ContactoComponent } from './contacto/contacto.component';
import { PersonaServicio } from './persona.servicio';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';


import { NgParticlesModule } from 'ng-particles';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NewExperienciaComponent } from './work/new-experiencia.component';
import { EditExperienciaComponent } from './work/edit-experiencia.component';
import { EducacionService } from './acreditations/educacion.service';
import { NeweducacionComponent } from './acreditations/neweducacion.component';
import { EditeducacionComponent } from './acreditations/editeducacion.component';
import { SkillsService } from './skills/skills.service';
import { EditSkillComponent } from './skills/edit-skill.component';
import { NewSkillComponent } from './skills/new-skill.component';
import { EditPersonaComponent } from './who-am-i/edit-persona.component';
import { CommonModule } from '@angular/common';
import { NewProyectoComponent } from './proyectos/new-proyecto.component';
import { EditProyectoComponent } from './proyectos/edit-proyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    WhoAmIComponent,
    WorkComponent,
    AcreditationsComponent,
    SkillsComponent,
    LearningComponent,
    WorkedComponent,
    ProyectosComponent,
    ContactoComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditPersonaComponent,
    NewProyectoComponent,
    EditProyectoComponent
  ],
  providers: [
    WorkServicio,
    LearningServicios,
    WorkedServicios,
    ProyectoServicios,
    EducacionService,
    SkillsService,
    PersonaServicio
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgParticlesModule, HttpClientModule, CommonModule, FormsModule,]
})
export class AppModule {}
