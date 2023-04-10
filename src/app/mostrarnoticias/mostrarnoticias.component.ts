import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrarnoticias',
  templateUrl: './mostrarnoticias.component.html',
  styleUrls: ['./mostrarnoticias.component.scss']
})
export class MostrarnoticiasComponent implements OnInit {
  noticias: any[] = [];
  noticias1: any =  [];
  constructor() { }

  ngOnInit(): void {

  const noticiasString = JSON.parse(localStorage.getItem('noticias1')!);
    this.noticias1 = noticiasString
  }

}
