import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPerrito } from 'src/app/interfaces/iperrito';
import { SPerritosService } from 'src/app/services/sperritos.service';

@Component({
  selector: 'app-add-perrito',
  templateUrl: './add-perrito.page.html',
  styleUrls: ['./add-perrito.page.scss'],
})
export class AddPerritoPage implements OnInit {

  newPerrito:IPerrito = {
    nombre:"Perrito nuevo",
    raza:"Raza nueva"
  }

  constructor(
    private perritoServ:SPerritosService,
    private router:Router
  ) { }

  ngOnInit() {
  }

    crearPerrito(){
      this.perritoServ.crearPerrito(this.newPerrito).subscribe()
      this.router.navigateByUrl("/list-perritos")
    }

}
