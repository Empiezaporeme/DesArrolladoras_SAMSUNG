import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SocioComponent } from './socio/socio.component';
import { ServicioSociosService } from './servicio-socios.service';
import {MatListModule} from '@angular/material/list'
import {MatToolbarModule} from '@angular/material/toolbar';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'actualizar/:id', component: ActualizarComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    ActualizarComponent,
    HomeComponent,
    SocioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    ReactiveFormsModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [ServicioSociosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
