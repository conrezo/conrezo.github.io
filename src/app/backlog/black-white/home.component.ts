import { Component, HostListener } from '@angular/core';

// declare function resize():any;
// declare function addListeners():any;
// declare function loop():any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(){
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.changeWidth();
  }

  ngOnInit(): void {
    // resize();
    // addListeners();
    // loop();
  }

  changeWidth() {
    var scroll = (window.pageYOffset);
    console.warn(scroll);
    var width = "";
    if (scroll == 0) width = "90%";
    else if (scroll == 100) width = "95%";
    else if (scroll == 200) width = "98%";
    else width = "100%";
    const element = document.getElementById('expand');
    if(element) element.style.width = width;
  }
}
