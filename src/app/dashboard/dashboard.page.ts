import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  listCategorys : any[]=[];
  listNoticias : any[]=[];

  constructor(
    public http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get('../../assets/noticias/noticias_all.JSON').subscribe(data => {
      this.listCategorys = JSON.parse(JSON.stringify(data))[0].noticias.categorys;
      this.listNoticias = JSON.parse(JSON.stringify(data))[0].detailNoticias;

      
    });
  }



}
