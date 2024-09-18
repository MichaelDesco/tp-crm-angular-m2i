import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../../core/models/client';
import { environment } from '../../../environments/environment.development';
import { StatusClient } from '../../core/enums/status-client.enum';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {}

  // Méthode pour récupérer tous les clients
  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.urlApi}/clients`);
  }

  public changeStatus(item: Client, status: StatusClient): Observable<Client> {
    const obj = new Client({ ...item });
    obj.state = status;
    return this.update(obj);
  }

  public update(item: Client): Observable<Client> {
    return this.http.put<Client>(`${this.urlApi}/clients/${item.id}`, item);
  }
}
