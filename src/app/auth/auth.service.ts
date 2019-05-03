import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgxRolesService, NgxPermissionsService} from 'ngx-permissions'
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs';

/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class AuthService {

    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor (private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService) { }

  private loggedIn = new BehaviorSubject<boolean>(false);
    private loggedOut = new BehaviorSubject<boolean>(true);

  get isLoggedIn() {
    return this.loggedIn.asObservable(); 
  }
  get isLoggedOut() {
    return this.loggedOut.asObservable(); 
  }

    start (): void {
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        this.permissionsService.loadPermissions(['edit_author_permission', 'delete_author_permission', 'leave_review']);
        const role = localStorage.getItem('role');
        if (!role) {
            this.setGuestRole();
        } else if (role === 'ADMIN') {
            this.setAdministratorRole();
        } else {
            this.setClientRole();
        }
    }

    setGuestRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('GUEST', ['']);
    }

    setClientRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('CLIENT', ['leave_review']);
        localStorage.setItem('role', 'CLIENT');
    }

    setAdministratorRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN', ['edit_author_permission', 'delete_author_permission']);
        localStorage.setItem('role', 'ADMIN');
    }

    printRole (): void {
        console.log(this.roleService.getRoles());
    }

    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     */
    login (role): void {
        if (role === 'Administrator') {
            this.setAdministratorRole();
        } else {
            this.setClientRole()
        }
         this.loggedIn.next(true);
         this.loggedOut.next(false);
        this.router.navigateByUrl('/');
    }

    /**
     * Logs the user out
     */
    logout (): void {
        this.roleService.flushRoles();
        this.setGuestRole();
        localStorage.removeItem('role');
         this.loggedIn.next(false);
         this.loggedOut.next(true);
        this.router.navigateByUrl('/');
    }
}
