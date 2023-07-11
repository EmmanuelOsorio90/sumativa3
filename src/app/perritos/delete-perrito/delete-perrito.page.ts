import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SPerritosService } from 'src/app/services/sperritos.service';

@Component({
  selector: 'app-delete-perrito',
  templateUrl: './delete-perrito.page.html',
  styleUrls: ['./delete-perrito.page.scss'],
})
export class DeletePerritoPage {

  perrito = {
    id: 0,
    nombre: "",
    raza : ""
  }

  constructor(private router:Router,private perritoServ:SPerritosService) { }

  ionViewWillEnter() {
    this.getPerritoByID(this.getIdFormURL())
  }

  getIdFormURL(){
    let url = this.router.url
    let arr = url.split("/",3)
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

  eliminarPerrito(){
    this.perritoServ.eliminarPerrito(this.perrito).subscribe()
    this.router.navigateByUrl("/list-perritos")
  }

}
