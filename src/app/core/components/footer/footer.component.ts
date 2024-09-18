import { Component } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentVersion!: number;

  constructor(private versionService: VersionService) {}

  ngOnInit() {
    this.versionService.numVersion$.subscribe((version) => {
      this.currentVersion = version;
    });
  }
}
