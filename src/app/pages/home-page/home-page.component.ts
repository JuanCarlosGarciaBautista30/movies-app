import { Component } from '@angular/core';
import { SideMenuComponent } from '../components/side-menu/side-menu.component';
import { MoviesSectionComponent } from '../components/movies-section/movies-section.component';
import { RightSideComponent } from '../components/right-side/right-side.component';

@Component({
  selector: 'app-home-page',
  imports: [

    SideMenuComponent,
    MoviesSectionComponent,
    RightSideComponent,
    SideMenuComponent,
    MoviesSectionComponent,
    RightSideComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
