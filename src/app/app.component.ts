import { Component } from '@angular/core';

declare var navigator;

@Component({
  selector: 'app-root',
  template:  `<h1>
                {{title}}
              </h1>`
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    console.log('CONSTRUCTOR')
      // if ('serviceWorker' in navigator) {
      //    navigator.serviceWorker
      //        .register('../service-worker.js')
      //        .then(function() { console.log('Service Worker Registered'); });
      // }
  }
}
