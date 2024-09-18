import { StatusClient } from '../enums/status-client.enum';

export interface ClientInterface {
  id: number;
  name: string;
  totalCaHt: number;
  tva: number;
  state: StatusClient;
  comment: string;
}
