import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';

  isSmallScreen() {
    return window.matchMedia("(max-width: 768px)").matches;
  }


  bigImg(x: any) {

    if (this.isSmallScreen()) {
      return;
    }

    x.style.height = "150px";
    x.style.width = "150px";
    x.style.top= "-10px";
    x.style.left= "-15px";

    if (x.children.length != 0) {
      const y = x.children[0];
      y.style.height = "120px";
      y.style.width = "120px";
      y.style.top= "15px";
      y.style.left= "15px";
    }


  }

  normalImg(x: any) {

    if (this.isSmallScreen()) {
      return;
    }

    x.style.height = "123px";
    x.style.width = "123px";
    x.style.top= "0px";
    x.style.left= "0px";
    if (x.children.length != 0) {
      const y = x.children[0];
      y.style.height = "90px";
      y.style.width = "90px";
      y.style.top= "17px";
      y.style.left= "17px";
    }
  }

}
