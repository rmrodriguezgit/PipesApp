import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  nombre = 'Rubén Rodríguez';
  valor: number = 1000;
  obj = {
    nombre: 'Rubén'
  }
}
