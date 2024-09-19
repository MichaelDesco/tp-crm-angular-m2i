import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
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

  headers: string[] = [
    'Action',
    'Name',
    'TotalCaHt',
    'Tva',
    'Comment',
    'State',
  ];

  collection$!: Observable<Client[]>;
  status = Object.values(StatusClient);

  private clientsService: ClientsService = inject(ClientsService);
  private router: Router = inject(Router);

  ngOnInit() {
    this.collection$ = this.clientsService.collection;
  }

  changeStatus(item: Client, $event: any) {
    const status = $event.target.value;
    this.clientsService.changeStatus(item, status).subscribe((data) => {
      Object.assign(item, data);
    });
  }

  deleteClient(item: Client, $event: any) {
    $event.preventDefault(); // Empêche le comportement par défaut de l'icône

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      imageUrl: 'deleteClient.jpeg', // chemin vers votre image
      imageWidth: 300, // largeur de l'image
      imageHeight: 300, // hauteur de l'image
      imageAlt: 'Custom image', // texte alternatif pour l'image
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown', // Animation d'entrée
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp', // Animation de sortie
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientsService.delete(item).subscribe(() => {
          this.collection$ = this.clientsService.collection;
          const element = document.getElementById(`client-${item.id}`);
          if (element) {
            element.remove();
          }
        });
      }
    });
  }
}
