import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../../core/models/order';
import { ClientsService } from '../../../clients/services/clients.service';

@Component({
  selector: 'app-page-edit-orders',
  templateUrl: './page-edit-orders.component.html',
  styleUrl: './page-edit-orders.component.scss',
})
export class PageEditOrdersComponent implements OnInit {
  title: string = 'Edit Order';
  item: Order = new Order();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ordersService: OrdersService,
    private clientsService: ClientsService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'URL
    const id = Number(this.route.snapshot.paramMap.get('id')); // Récupérer l'id de l'URL

    if (id) {
      // Récupérer la commande depuis l'API
      this.ordersService.getOrderById(id).subscribe((order) => {
        this.item = order; // Injecter les données dans l'objet item
      });
    }
  }

  handleSubmit(order: Order): void {
    // Appeler la méthode update pour mettre à jour l'ordre
    this.ordersService.update(order).subscribe(() => {
      // Redirection vers la liste des commandes après la mise à jour
      this.router.navigate(['/orders']);
    });
  }

}
