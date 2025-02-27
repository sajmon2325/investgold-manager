import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/header/navbar.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
    selector: 'landing-page',
    standalone: true,
    imports: [NavbarComponent, FooterComponent],
    templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {

}