import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { StatusClient } from '../../core/enums/status-client.enum';
import { Client } from '../../core/models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private collection$!: Observable<Client[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Client[]>(`${this.urlApi}/clients`).pipe(
      map((data) => {
        return data.map((obj) => new Client(obj));
      })
    );
  }

  public get collection(): Observable<Client[]> {
    return this.collection$;
  }

  public set collection(col: Observable<Client[]>) {
    this.collection$ = col;
  }

  public getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.urlApi}/clients`);
  }

  public add(item: Client): Observable<Client> {
    return this.http.post<Client>(`${this.urlApi}/clients`, item);
  }

  public getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.urlApi}/clients/${id}`);
  }

  public delete(item: Client): Observable<void> {
    return this.http.delete<void>(`${this.urlApi}/clients/${item.id}`);
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
