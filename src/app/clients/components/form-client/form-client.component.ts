import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusClient } from '../../../core/enums/status-client.enum';
import { Client } from '../../../core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrl: './form-client.component.scss',
})
export class FormClientComponent {
  status = Object.values(StatusClient);
  @Input() init!: Client;
  @Output() submitted = new EventEmitter<Client>();
  form!: FormGroup;

  private fb: FormBuilder = inject(FormBuilder);

  // Utiliser ngOnChanges pour détecter les changements dans @Input()
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['init'] && changes['init'].currentValue) {
      this.initializeForm(changes['init'].currentValue); // Initialiser le formulaire avec les nouvelles données
    }
  }

  ngOnInit() {
    this.initializeForm(this.init);
  }

  // Méthode pour initialiser le formulaire avec des valeurs
  initializeForm(client: Client) {
    this.form = this.fb.group({
      totalCaHt: [client.totalCaHt],
      tva: [client.tva],
      state: [client.state],
      name: [
        client.name,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      comment: [client.comment],
      id: [client.id],
    });
  }

  submit() {
    this.submitted.emit(this.form.value);
  }
}
