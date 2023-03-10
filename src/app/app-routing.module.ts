import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './acreditations/editeducacion.component';
import { NeweducacionComponent } from './acreditations/neweducacion.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EditProyectoComponent } from './proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './proyectos/new-proyecto.component';
import { EditSkillComponent } from './skills/edit-skill.component';
import { NewSkillComponent } from './skills/new-skill.component';
import { EditPersonaComponent } from './who-am-i/edit-persona.component';
import { EditExperienciaComponent } from './work/edit-experiencia.component';
import { NewExperienciaComponent } from './work/new-experiencia.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NeweducacionComponent },
  { path: 'editedu/:id', component: EditeducacionComponent },
  { path: 'nuevaskill', component: NewSkillComponent },
  { path: 'editskill/:id', component: EditSkillComponent },
  { path: 'editpersona/:id', component: EditPersonaComponent },
  { path: 'editproyecto/:id', component: EditProyectoComponent },
  { path: 'nuevoproyecto', component: NewProyectoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
