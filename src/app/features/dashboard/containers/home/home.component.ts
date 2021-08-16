import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <p>LLamando a mis dumb components</p>
        <app-home-seccion> </app-home-seccion>
    `,
    styles: [],
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
