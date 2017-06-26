import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.partial.html'
})

export class AppComponent {
    public currentSite: string;
    public site: any = {};

    constructor() {
        
     }

    setCurrentSite(name: string): void {
        this.currentSite = name;
    }

    setDataToComponentModel() {

    }

}