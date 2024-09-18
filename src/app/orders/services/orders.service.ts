import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { StatusOrder } from '../../core/enums/status-order.enum';
import { Order } from '../../core/models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      map((data) => {
        return data.map((obj) => new Order(obj));
      })
    );
  }

  public get collection(): Observable<Order[]> {
    return this.collection$;
  }

  public set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }

  public add(item: Order): Observable<Order> {
    return this.http.post<Order>(`${this.urlApi}/orders`, item);
  }

  public getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.urlApi}/orders/${id}`);
  }

  public delete(item: Order): Observable<void> {
    return this.http.delete<void>(`${this.urlApi}/orders/${item.id}`);
  }

  public changeStatus(item: Order, status: StatusOrder): Observable<Order> {
    const obj = new Order({ ...item });
    obj.state = status;
    return this.update(obj);
  }

  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }
}
