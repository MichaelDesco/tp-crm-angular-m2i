import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Client } from '../../../core/models/client';
import { ClientsService } from '../../services/clients.service';

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
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.clientsService.getClientById(id).subscribe((client) => {
        this.item = client; // Injecter les données dans l'objet item
      });
    }
  }

  handleSubmit(client: Client): void {
    Swal.fire({
      title: 'Are you sure?',
      imageUrl: 'editClient.jpeg',
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: 'Custom image',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, update!',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientsService.update(client).subscribe(() => {
          this.router.navigate(['/clients']);
        });
      }
    });
  }
}
