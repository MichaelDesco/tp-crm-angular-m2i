import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { VersionService } from '../../services/version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  currentVersion!: number;
  constructor(private versionService: VersionService) {
    // console.log('Nav component : ', this.versionService.numVersion$);
  }
  increment() {
    Swal.fire({
      title: 'Upgrade Version ?',
      imageUrl: 'versionUpgrade.jpeg', // chemin vers votre image
      imageWidth: 300, // largeur de l'image
      imageHeight: 300, // hauteur de l'image
      imageAlt: 'Custom image', // texte alternatif pour l'image
      showCancelButton: true,
      confirmButtonText: 'Yes, for sure !',
      cancelButtonText: 'No, Thanks',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        this.versionService.incrementVersion();
      }
    });
  }
}
