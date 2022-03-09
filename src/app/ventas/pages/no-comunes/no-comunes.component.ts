import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  constructor() { }

 nombre: string = 'Rubén';
 genero: string = 'masculino';

 invitacionMapa = {
   'masculino' : 'invitarlo',
   'femenino'  : 'invitarla'
 }

 clientes: string[] = ['María','Rubén','José','Joana'];
 clientesMapa = {
   '=0': 'no tenemos ningún cliente esperado',
   '=1': 'tenemos un cliente esperando.',
   '=2': 'tenemos 2 clientes esperando.',
   'other': 'tenemos # clientes esperando.'
  }

 cambiarCliente() {
   this.nombre = 'Fernanda';
   this.genero = 'femenino';
 }

 borrarCliente() {
   this.clientes.splice( 0, 1);
 }

 persona = {
   nombre: 'Fernando',
   edad: 35,
   direccion: 'Otawa, Canada'
 }

  heroes = [
  {
    nombre: 'Superman',
    vuela: true
  },
  {
    nombre: 'Robin',
    vuela: false
  },
  {
    nombre: 'Aquaman',
    vuela: false
  }
  ];

// Async Pipe
  miObservable = interval(2000); // 0,1,2,3,4,5,6,

  valorPromesa = new Promise( (resolve, reject) => {

      setTimeout(() => {
        resolve( 'Tenemos data de promesa' );
      }, 3500 );

  });


}
