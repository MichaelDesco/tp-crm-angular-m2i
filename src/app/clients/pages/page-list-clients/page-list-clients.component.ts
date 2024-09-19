import { Component } from '@angular/core';
import { StatusClient } from '../../../core/enums/status-client.enum';
import { Client } from '../../../core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrl: './page-list-clients.component.scss',
})
export class PageListClientsComponent {
  title: string = 'Clients List';

  headers: string[] = ['Action','Name', 'TotalCaHt', 'Tva', 'Comment', 'State'];
  collection!: Client[];
  status = Object.values(StatusClient);

  constructor(private clientsService: ClientsService) {
    this.clientsService.getClients().subscribe((clients) => {
      this.collection = clients;
    });
  }

  changeStatus(item: Client, $event: any) {
    const status = $event.target.value;
    this.clientsService.changeStatus(item, status).subscribe((data) => {
      Object.assign(item, data);
    });
  }
}
