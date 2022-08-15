import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { EstudiosComponent } from './componentes/estudios/estudios.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { PieComponent } from './componentes/pie/pie.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MainComponent } from './componentes/main/main.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './componentes/logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    EstudiosComponent,
    AcercaDeComponent,
    FormularioComponent,
    PieComponent,
    NavbarComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
