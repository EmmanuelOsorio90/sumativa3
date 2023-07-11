import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPerrito } from '../interfaces/iperrito';
import { IPerritos } from '../interfaces/iperritos';

@Injectable({
  providedIn: 'root'
})
export class SPerritosService {

  constructor(private http:HttpClient) { }

  listarPerritos():Observable<IPerritos>{
    return this.http.get<IPerritos>(`${environment.apiURL}/perritos`)
  }

  crearPerrito(newPerrito:IPerrito):Observable<IPerrito>{
    return this.http.post<IPerrito>(`${environment.apiURL}/perritos`, newPerrito)
  }

  getPerritoByID(id:Number):Observable<IPerritos>{
    return this.http.get<IPerritos>(`${environment.apiURL}/perritos/?id=${id}`)
  }

  actualizarPerrito(perrito:any):Observable<IPerritos>{
    return this.http.put<IPerritos>(`${environment.apiURL}/perritos/${perrito.id}`, perrito)
  }

  eliminarPerrito(perrito:any):Observable<IPerritos>{
    return this.http.delete<IPerritos>(`${environment.apiURL}/perritos/${perrito.id}`)
  }

}

