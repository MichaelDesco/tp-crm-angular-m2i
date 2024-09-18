import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { StatusOrder } from '../../../core/enums/status-order.enum';
import { Order } from '../../../core/models/order';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../../../clients/services/clients.service';
import { Client } from '../../../core/models/client';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrl: './form-order.component.scss',
})
export class FormOrderComponent {
  status = Object.values(StatusOrder);
  @Input() init!: Order;
  @Output() submitted = new EventEmitter<Order>();
  form!: FormGroup;

  clients: Client[] = []; // Liste des clients

  constructor(
    private fb: FormBuilder,
    private clientsService: ClientsService
  ) {}

  // Utiliser ngOnChanges pour détecter les changements dans @Input()
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['init'] && changes['init'].currentValue) {
      this.initializeForm(changes['init'].currentValue); // Initialiser le formulaire avec les nouvelles données
    }
  }

  ngOnInit(): void {
    // Récupérer la liste des clients via le service lors de l'initialisation
    this.clientsService.getClients().subscribe((clients) => {
      this.clients = clients;
      console.log(this.clients);
    });
  }

  // Méthode pour initialiser le formulaire avec des valeurs
  initializeForm(order: Order) {
    this.form = this.fb.group({
      tjmHt: [order.tjmHt],
      nbJours: [order.nbJours],
      tva: [order.tva],
      state: [order.state],
      client: [order.client, [Validators.required]],
      comment: [order.comment],
      typePresta: [order.typePresta, Validators.required],
      id: [order.id],
    });
  }

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}
