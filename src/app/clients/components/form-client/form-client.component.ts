import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../../core/models/client';
import { StatusClient } from '../../../core/enums/status-client.enum';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrl: './form-client.component.scss',
})
export class FormClientComponent {
  public status = Object.values(StatusClient);
  @Input() init!: Client;
  @Output() submitted = new EventEmitter<Client>();
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['init'] && changes['init'].currentValue) {
      this.initializeForm(changes['init'].currentValue);
    }
  }

  // je crée un formulaire avec les données initiales
  ngOnInit() {
    this.initializeForm(this.init);
  }

  initializeForm(client: Client) {
    this.form = this.fb.group({
      name: [client.name, Validators.required], // Ajout de Validators pour valider le champ
      totalCaHt: [client.totalCaHt],
      tva: [client.tva],
      comment: [client.comment],
      state: [client.state],
    });
  }

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}
