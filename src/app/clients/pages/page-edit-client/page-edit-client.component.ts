import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../../core/models/client';
import { ClientsService } from '../../services/clients.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrl: './page-edit-client.component.scss',
})
export class PageEditClientComponent implements OnInit {
  title: string = 'Edit Client';
  item: Client = new Client();

  private clientsService: ClientsService = inject(ClientsService);
  private router: Router = inject(Router);
  private route: ActivatedRoute = inject(ActivatedRoute);

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

  handleSubmit(client: Client): void {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      imageUrl: 'editClient.jpeg', // chemin vers votre image
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
        // Appeler la méthode update pour mettre à jour l'ordre
        this.clientsService.update(client).subscribe(() => {
          // Redirection vers la liste des commandes après la mise à jour
          this.router.navigate(['/clients']);
        });
      }
    });
  }
}
