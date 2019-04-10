import { UsuariocrearComponent } from './../usuario/usuarioCrear/usuarioCrear.component';
import { UsuarioDetailComponent } from './../usuario/usuarioDetail/usuarioDetail.component';
import { UsuarioslistComponent } from './../usuario/usuariosList/UsuariosList.component';
import { LibrosDetailComponent } from './../libros/libros-detail/libros-detail.component';
import { LibrosCreateComponent } from './../libros/libros-create/libros-create.component';
import { LibrosListComponent } from './../libros/libros-list/libros-list.component';
import {CarroComponent} from './../carro/carro-detail/carro.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { CarroListComponent } from '../carro/carro-list/carro-list.component';
import { CarroDetail } from '../carro/carro-detail';

const routes: Routes = [

     {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
        component: AuthLoginComponent
    },
   /*  {
        path: '**',
        redirectTo: 'home',
    }, */
    {
        path: 'usuarios',
        children: [
            {
                path: 'list',
                component: UsuarioslistComponent
            },
            {
                path: 'add',
                component: UsuariocrearComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id',
                component: UsuarioDetailComponent
            }
           
        ]
    },
   
    {
        path: 'libros',
        children: [
            {
                path: 'list',
                component: LibrosListComponent
            },
            {
                path: ':id',
                component: LibrosDetailComponent
            },
             {
                path: 'add',
                component: LibrosCreateComponent,
                runGuardsAndResolvers: 'always'
            }
            
        ]
    },{
        path: 'carro',
        children: [
            {
                path: 'list',
                component: CarroListComponent,
                children: [
                {
                    path: ':id',
                    component: CarroComponent
                }
            ]
            },
            {
                path: ':id',
                component: CarroDetail
            }
        ]
    }
    

];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
