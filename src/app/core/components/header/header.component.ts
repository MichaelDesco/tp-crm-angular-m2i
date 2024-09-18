import { Component } from '@angular/core';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  currentVersion!: number;

  constructor(private versionService: VersionService) {}

  ngOnInit() {
    this.versionService.numVersion$.subscribe((version) => {
      this.currentVersion = version;
    });
  }
}
