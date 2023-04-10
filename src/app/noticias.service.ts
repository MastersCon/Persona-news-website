import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private url = 'https://api.newscatcherapi.com/v2/search?q=Google';
  private apiKey = 'P8cU5P6LWMO7t0d6o68wMlZKYIn8GlBx_O8Tdkrwquo';

  constructor(private http: HttpClient) { }

  obtenerNoticias() {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    const params = {
      q: 'Google',
      lang: 'es',
      sort_by: 'relevancy',
      page: '1'
    };
    return this.http.get(this.url, { headers, params });
  }

}
