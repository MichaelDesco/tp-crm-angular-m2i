import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { StatusOrder } from '../../../core/enums/status-order.enum';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss',
})
export class PageListOrdersComponent {
  title: string = 'Orders List';

  headers: string[] = [
    'Action',
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];
  collection$!: Observable<Order[]>;
  status = Object.values(StatusOrder);

  private ordersService: OrdersService = inject(OrdersService);
  private router: Router = inject(Router);

  ngOnInit() {
    this.collection$ = this.ordersService.collection;
  }
  // constructor(private ordersService: OrdersService) {
  //   this.collection$ = this.ordersService.collection;
  // }

  changeStatus(item: Order, $event: any) {
    const status = $event.target.value;
    this.ordersService.changeStatus(item, status).subscribe((data) => {
      Object.assign(item, data);
    });
  }

  // editClick(id: number, $event: any) {
  //   $event.preventDefault(); // Empêche le comportement par défaut du lien
  //   this.ordersService.getOrderById(id).subscribe((order) => {
  //     // Passe les données de la commande à la page d'édition
  //     this.router.navigate(['/orders/edit', id], { state: { order } });
  //   });
  // }

  deleteOrder(item: Order, $event: any) {
    $event.preventDefault(); // Empêche le comportement par défaut de l'icône

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      imageUrl: 'deleteOrder.jpeg', // chemin vers votre image
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
        this.ordersService.delete(item).subscribe(() => {
          // Rafraîchir la collection après suppression
          this.collection$ = this.ordersService.collection;
          const element = document.getElementById(`order-${item.id}`);
          if (element) {
            element.remove();
          }
        });
      }
    });
  }
}
