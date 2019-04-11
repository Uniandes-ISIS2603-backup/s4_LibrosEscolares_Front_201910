import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsuariocrearComponent } from './usuarioCrear/usuarioCrear.component';
import { UsuarioDetailComponent } from './usuarioDetail/usuarioDetail.component';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioslistComponent } from './usuariosList/UsuariosList.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from '../app-routing/app-routing.module';


import { UsuarioService } from './Usuario.service';








import { UsuarioeditarComponent } from './usuarioEditar/usuarioEditar.component';

@NgModule({
   
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule
    ],
    
 
 declarations: [
    UsuarioeditarComponent,UsuariocrearComponent,UsuarioslistComponent, UsuarioDetailComponent],
    



providers: [
    UsuarioService],
})
export class UsuarioModule { }