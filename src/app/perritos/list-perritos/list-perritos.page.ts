import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { SPerritosService } from 'src/app/services/sperritos.service';

@Component({
  selector: 'app-list-perritos',
  templateUrl: './list-perritos.page.html',
  styleUrls: ['./list-perritos.page.scss'],
})
export class ListPerritosPage {

  perritos:any= []

  constructor(private perritosServ:SPerritosService, private loadingCtrl:LoadingController) { }

  ionViewWillEnter(){
    this.loadPerritos()
  }

  async loadPerritos(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create({
        message: "cargando...",
        spinner: "bubbles"
      }
    );
    await loading.present();

    this.perritosServ.listarPerritos().subscribe(
      (resp) => {
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.perritos = JSON.parse(listString)
        event?.target.complete();
      },
      (err) => {
        console.log(err.message)
        loading.dismiss();
      }
    )
  }
}
