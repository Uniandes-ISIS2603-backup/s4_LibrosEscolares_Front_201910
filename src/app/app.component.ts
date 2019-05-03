import {Component, OnInit} from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs/Observable';

/**
 * The app component. This component is the base of s4_libros-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;
    select: boolean = false;
    isLoggedIn$: Observable<boolean>;
    isLoggedOut$: Observable<boolean>;
    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "s4_libros-Front";
        this.authService.start();
        this.isLoggedIn$ = this.authService.isLoggedIn;
        this.isLoggedOut$ = this.authService.isLoggedOut;
    }
       /**
     * @ignore
     */
    constructor(private authService: AuthService) { }

    selected(): void
    {
        this.select = true;
    }

    diselected(): void
    {
         this.select = false;
    }

    getSelect(): boolean
    {
        return this.select;
    }

    logout(): void {
        this.authService.logout()
    }

}





