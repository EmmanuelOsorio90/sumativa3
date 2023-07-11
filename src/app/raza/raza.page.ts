import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raza',
  templateUrl: './raza.page.html',
  styleUrls: ['./raza.page.scss'],
})
export class RazaPage implements OnInit {

  public data = [
    'Akita',
    'Beagle',
    'Border Collie',
    'Boxer',
    'Bulldog francés',
    'Chow Chow',
    'Collie Barbudo',
    'Dálmata',
    'Gran Danés ',
  ];

  public results = [...this.data];

  ngOnInit() { 
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }
}

