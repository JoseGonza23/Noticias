import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  listCategorys: any[] = [];
  listNoticias: any[] = [];

  constructor(public http: HttpClient) {}

  async ngOnInit() {
    try {
      const data = await this.http.get('/assets/noticias/noticias_all.JSON').toPromise();
      if (Array.isArray(data) && data.length > 0) {
        this.listCategorys = data[0]?.noticias?.categorys || [];
        this.listNoticias = data[0]?.detailNoticias || [];
      } else {
        console.error('El JSON no tiene la estructura esperada');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      // Puedes mostrar un mensaje de error en la interfaz de usuario
    }
  }
}
