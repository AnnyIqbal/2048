import { Component } from '@angular/core';

declare var navigator;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
      if ('serviceWorker' in navigator) {
         navigator.serviceWorker
             .register('../service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
      }
  }
}
