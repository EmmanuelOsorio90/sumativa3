import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetapiService } from 'src/app/services/getapi.service';

@Component({
  selector: 'app-apiexterna',
  templateUrl: './apiexterna.page.html',
  styleUrls: ['./apiexterna.page.scss'],
})
export class ApiexternaPage implements OnInit {
  users:any;
  user:any;
  constructor(private api: GetapiService) { }

  ngOnInit() {
  }

  apiexterna(form: NgForm){
    
  }

  getUsuarios() {
    this.api.getUsuarios().subscribe((data)=>{
      this.users = data;
    })
  }

  ionViewWillEnter(){
    this.getUsuarios();
  }
}

