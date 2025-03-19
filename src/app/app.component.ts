import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';
import { HomePageComponent } from "./pages/home-page/home-page.component";




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  faCoffee = faCoffee;

  faUser = faUser;

}
