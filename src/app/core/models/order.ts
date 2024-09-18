import { StatusOrder } from '../enums/status-order.enum';
import { OrderInterface } from '../interfaces/order-interface';

export class Order implements OrderInterface {
  id!: number;
  tjmHt = 1200;
  nbJours = 1;
  tva = 20;
  state = StatusOrder.OPTION;
  typePresta!: string;
  client!: string;
  comment!: string;
  constructor(obj?: Partial<Order>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

  totalHT(): number {
    return this.tjmHt * this.nbJours;
  }

  totalTTC(): number {
    return this.totalHT() * (1 + this.tva / 100);
  }
}