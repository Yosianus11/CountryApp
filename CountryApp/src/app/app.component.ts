import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CountryApp';
  menu = 1;
  home=1;

  changeMenu(e: number, r:number  ) {
    this.menu = e
    this.home = r
  }
  
  
}
