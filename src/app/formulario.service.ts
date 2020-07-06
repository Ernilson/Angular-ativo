import { environment} from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  url: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) {   }

  listar(){
    return this.http.get<any[]>(`${this.url}`);
  }
  
  criar(contatos: any){
    return this.http.post(this.url, contatos);
  }
}
