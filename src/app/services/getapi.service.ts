import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {
  getUsers() {
    throw new Error('Method not implemented.');
  }

  apiURL = 'https://jsonplaceholder.typicode.com';

  constructor( private http: HttpClient ) { }

  getUsuarios():Observable<any>{
    return this.http.get(this.apiURL+'/users/').pipe(
      retry(3)
    );
  }
}





