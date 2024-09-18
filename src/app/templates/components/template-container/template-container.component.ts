import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styleUrl: './template-container.component.scss',
})
export class TemplateContainerComponent {
  @Input() title!: string;
}
