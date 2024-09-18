import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss',
})
export class BtnComponent {
  @Input() label!: string;
  @Input() route!: string;
}
