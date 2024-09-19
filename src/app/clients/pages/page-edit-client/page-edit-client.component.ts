import { Component, OnInit } from '@angular/core';
import { Client } from '../../../core/models/client';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrl: './page-edit-client.component.scss',
})
export class PageEditClientComponent implements OnInit {
  title: string = 'Edit Client';
  item: Client = new Client();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientsService: ClientsService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'URL
    const id = Number(this.route.snapshot.paramMap.get('id')); // Récupérer l'id de l'URL

    if (id) {
      // Récupérer la commande depuis l'API
      this.clientsService.getClientById(id).subscribe((client) => {
        this.item = client; // Injecter les données dans l'objet item
      });
    }
  }

  handleSubmit(item: Client) {
    // Appeler la méthode update pour mettre à jour l'ordre
    this.clientsService.update(item).subscribe(() => {
      // Redirection vers la liste des commandes après la mise à jour
      this.router.navigate(['/clients']);
    });
  }
}
