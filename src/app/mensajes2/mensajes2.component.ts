import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes2',
  templateUrl: './mensajes2.component.html',
  styleUrls: ['./mensajes2.component.css']
})
export class Mensajes2Component implements OnInit {

  nombreMnsj: string;

  constructor() { 
    this.nombreMnsj = "@Bakerys";
   
  }

  ngOnInit(): void {
  }

}
