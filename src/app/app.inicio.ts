import {Component, OnInit} from '@angular/core';

/**
 * The app component. This component is the base of s4_libros-Front
 */
@Component({
    selector: 'app-inicio',
    templateUrl: './app.inicio.html',
    styleUrls: ['./app.inicio.css']
})
export class AppInicio implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;
    select: boolean = false;

    

       /**
     * @ignore
     */
    constructor() { }

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
    }
     ngOnInit() {
       
    }

}





