import { UsuarioslistComponent } from './usuario/usuariosList/UsuariosList.component';
import {LibrosListComponent } from './libros/libros-list/libros-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';
import {CarroModule} from './carro/carro.module'
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import { UsuarioModule } from './usuario/Usuario.module';
import {LibrosModule } from './libros/libros.module';
import { DemoMaterialModule } from '../material-module';
import { RespuestaModule } from './respuesta/respuesta.module';
import { CarroComponent } from './carro/carro-detail/carro.component';
import { CanjeModule } from './canje/canje.module';
import { AppInicio } from './app.inicio';
  





@NgModule({
    declarations: [
        AppComponent,
        AppInicio
    ],
    imports: [
        BrowserModule,
        UsuarioModule,
        LibrosModule,
        CanjeModule,
        AppRoutingModule,
        UsuarioModule,
        CarroModule,
        RespuestaModule,
        DemoMaterialModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        CanjeModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule
    ],
    bootstrap: [AppComponent],
    entryComponents:[CarroComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
