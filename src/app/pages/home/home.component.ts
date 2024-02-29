import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(){
    document.addEventListener('DOMContentLoaded', () => {
      const interBubble = document.querySelector<HTMLDivElement>('.interactive')!;
      let curX = 0;
      let curY = 0;
      let tgX = 0;
      let tgY = 0;
  
      function move() {
          curX += (tgX - curX) / 20;
          curY += (tgY - curY) / 20;
          interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
          requestAnimationFrame(() => {
              move();
          });
      }
  
      window.addEventListener('mousemove', (event) => {
          tgX = event.clientX;
          tgY = event.clientY;
      });
  
      move();
  });
  }
}
