import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiURL = 'https://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient ) { }
  
  obtenerDatos() : Observable<any>{
    return this.http.get(this.apiURL);
  }
}