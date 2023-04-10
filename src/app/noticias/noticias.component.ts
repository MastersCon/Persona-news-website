import { MostrarnoticiasComponent } from './../mostrarnoticias/mostrarnoticias.component';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NoticiasService } from '../noticias.service';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
noticias: any = [];


  constructor(private noticiasService: NoticiasService,private router: Router) {
    this.noticiasService.obtenerNoticias().subscribe((data: any) => {
      this.noticias = data.articles;

      localStorage.setItem("noticias",JSON.stringify(this.noticias))
    });
   }

  ngOnInit(): void {

  }

  aceptar(noticias:any){

    localStorage.setItem("noticias1",JSON.stringify(noticias))
    console.log(noticias);
    this.router.navigateByUrl('/mostrarnoticias');
    }

}
