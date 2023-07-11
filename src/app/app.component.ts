import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'home' },
    { title: 'Login', url: 'login', icon: 'log-in' },
    { title: 'Mi Cuenta', url: 'cuenta', icon: 'person' },
    { title: 'Razas', url: 'raza', icon: 'paw' }, 
    { title: 'Lista de perritos 🐶', url: 'list-perritos', icon: 'list' },
    { title: 'api', url: 'apiexterna', icon: 'battery-charging' },

  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}


