import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api/public_api';



@Component({
  selector: 'app-mapas',
  templateUrl: './mapas.component.html',
  styles: [
  ]
})
export class MapasComponent implements OnInit {

  options: any;

    overlays: any[] | undefined;

    ngOnInit() {
        this.options = {
            center: {lat: 21.15327, lng: -101.60057},
            // 21.15327,-101.60057
            zoom: 12
        };
    }

}
