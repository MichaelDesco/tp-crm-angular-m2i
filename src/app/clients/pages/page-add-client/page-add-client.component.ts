import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Client } from '../../../core/models/client';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrl: './page-add-client.component.scss',
})
export class PageAddClientComponent {
  title: string = 'Add Client';
  item = new Client();

  private clientsService: ClientsService = inject(ClientsService);
  private router: Router = inject(Router);

  handleSubmit(item: Client) {
    Swal.fire({
      title: 'Add Client?',
      imageUrl: 'addOrder.jpeg',
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: 'Custom image',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, for sure!',
      cancelButtonText: 'No, thanks',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Si l'utilisateur confirme, on ajoute l'ordre dans la base de données
        this.clientsService.add(item).subscribe({
          complete: () => {
            this.router.navigate(['/clients']);
          },
          error: (error) => {
            Swal.fire('Erreur', "Erreur lors de l'ajout du client", 'error');
            console.error("Erreur lors de l'ajout du client", error);
          },
        });
      }
    });
  }
}