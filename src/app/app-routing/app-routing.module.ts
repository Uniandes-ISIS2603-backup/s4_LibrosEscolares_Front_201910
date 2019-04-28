import { RespuestaListComponent } from './../respuesta/respuesta-list/respuesta-list.component';
import { CanjeGetComponent } from './../canje/canje-get/canje-get.component';
import { CanjeCreateComponent } from './../canje/canje-create/canje-create.component';
import { CanjeGetListComponent } from './../canje/canje-get-list/canje-get-list.component';
import { UsuarioeditarComponent } from './../usuario/usuarioEditar/usuarioEditar.component';
import { UsuariocrearComponent } from './../usuario/usuarioCrear/usuarioCrear.component';
import { UsuarioDetailComponent } from './../usuario/usuarioDetail/usuarioDetail.component';
import { UsuarioslistComponent } from './../usuario/usuariosList/UsuariosList.component';
import { LibrosEditComponent } from './../libros/libros-edit/libros-edit.component';
import { LibrosDetailComponent } from './../libros/libros-detail/libros-detail.component';
import { LibrosCreateComponent } from './../libros/libros-create/libros-create.component';
import { LibrosListComponent } from './../libros/libros-list/libros-list.component';


import { CarroComponent } from './../carro/carro-detail/carro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { CarroListComponent } from '../carro/carro-list/carro-list.component';
import { CarroDetail } from '../carro/carro-detail';
import { RespuestaDetailComponent } from '../respuesta/respuesta-detail/respuesta-detail.component';
import { CarroCreateComponent } from '../carro/carro-create/carro-create.component';
import { CarroUpdateComponent } from '../carro/carro-update/carro-update.component';
import { RespuestaCreateComponent } from '../respuesta/respuesta-create/respuesta-create.component';
import { RespuestaUpdateComponent } from '../respuesta/respuesta-update/respuesta-update.component';

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
            },
            {
                path: ':id/edit',
                component: UsuarioeditarComponent,
                runGuardsAndResolvers: 'always'
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
                path: 'add',
                component: LibrosCreateComponent,
                runGuardsAndResolvers: 'always'
            }
            ,
            {
                path: ':id',
                component: LibrosDetailComponent
            },
            {
                path: ':id/edit',
                component: LibrosEditComponent,
                runGuardsAndResolvers: 'always'
            }
            
        ]
    }, {
        path: 'carro',
        children: 
        [
            
            {
                path: 'create',
                component: CarroCreateComponent
            },
            {
                path: 'update',
                component: CarroUpdateComponent
            },
            {
                path: 'list',
                component: CarroListComponent,
                children:
                    [
                        {
                            path: ':id',
                            component: CarroComponent
                        }
                    ]
            },
            {
                path: ':id',
                component: CarroComponent
            }
        ]
    },
    {
        path: 'canjes',
        children: [
            {
                path: 'list',
                component: CanjeGetListComponent
            },
            {
                path: 'add',
                component: CanjeCreateComponent,
                runGuardsAndResolvers: 'always'
            },

            {
                path: ':id',
                component: CanjeGetComponent
            }


        ]
    },
    {
        path: 'respuesta',
        children: [
            {
                path: 'update',
                component: RespuestaUpdateComponent
            }
            ,
            {
                path: 'create',
                component: RespuestaCreateComponent
            }
            ,
            {
                path: 'list',
                component: RespuestaListComponent
            },
            {
                path: ':id',
                component: RespuestaDetailComponent
            }
        ]
    }


];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
