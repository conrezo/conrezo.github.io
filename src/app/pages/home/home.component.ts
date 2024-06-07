import { Component, HostListener } from '@angular/core';

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
    const hello = document.getElementById('hello');
    // if(hello) {
    //   setTimeout(function(){
    //     hello.style.marginBottom = "3rem";
    //     hello.style.display = "inline-block";
    //   }, 2000)
    // }
    window.onload = function() {
      const hello = document.getElementById('hello');
      if(hello) hello.classList.add('slide-in');
      const arrow = document.getElementById('arrow');
      if(arrow) arrow.classList.add('slide-in-delay');
    };

  }

  changeWidth(){
    var scroll = (window.pageYOffset);
    var width = "";
    if(scroll<101) width = 80 + scroll/10 + "%";
    else width = "90%";
    const element = document.getElementById('expand');
    if(element) element.style.width = width;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }
  
}
