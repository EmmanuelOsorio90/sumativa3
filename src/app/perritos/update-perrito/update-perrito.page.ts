import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SPerritosService } from 'src/app/services/sperritos.service';

@Component({
  selector: 'app-update-perrito',
  templateUrl: './update-perrito.page.html',
  styleUrls: ['./update-perrito.page.scss'],
})
export class UpdatePerritoPage {

  perrito = {
    id: 0,
    nombre: "",
    raza: ""
  }

  constructor(private perritoServ:SPerritosService, private router:Router) { }

  ionViewWillEnter(){
    this.getPerritoByID(this.getIdFormURL())
  }

  getIdFormURL(){
    let url = this.router.url
    let arr = url.split("/", 3)
    let id = parseInt(arr[2])
    return id
  }

  getPerritoByID(perritoID:Number){
    this.perritoServ.getPerritoByID(perritoID).subscribe(
      (resp:any) => {
        this.perrito = {
          id: resp[0].id,
          nombre: resp[0].nombre,
          raza: resp[0].raza
        }
      }
    )
  }

  updatePerrito(){
    this.perritoServ.actualizarPerrito(this.perrito).subscribe()
    this.router.navigateByUrl("/list-perritos")
  }

}
