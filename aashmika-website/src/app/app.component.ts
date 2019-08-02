import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Aashmika Mali';
  links = ['Home', 'Second', 'Third'];
  activeLink = this.links[0];
  background = '';
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
  toggleBackground() {
    this.background = this.background ? '' : 'secondary';
  }
}
