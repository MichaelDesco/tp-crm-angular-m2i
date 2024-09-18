import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-add-orders',
  templateUrl: './page-add-orders.component.html',
  styleUrl: './page-add-orders.component.scss',
})
export class PageAddOrdersComponent {
  title: string = 'Add Order';
  item = new Order();

  private ordersService: OrdersService = inject(OrdersService);
  private router: Router = inject(Router);

  handleSubmit(item: Order) {
    Swal.fire({
      title: 'Add Order?',
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
        this.ordersService.add(item).subscribe({
          complete: () => {
            this.router.navigate(['/orders']);
          },
          error: (error) => {
            Swal.fire('Erreur', "Erreur lors de l'ajout de l'ordre", 'error');
            console.error("Erreur lors de l'ajout de l'ordre", error);
          },
        });
      }
    });
  }
}