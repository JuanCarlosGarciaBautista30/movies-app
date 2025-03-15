import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  faCoffee = faCoffee;

  faUser = faUser;

}
