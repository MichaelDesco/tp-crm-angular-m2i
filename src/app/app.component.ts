import { Component } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Mon CRM v1.0';

  // // Exemple d'Observable
  // obs$ = new Observable<number>((sub) => {
  //   // Émet une valeur aléatoire entre 0 et 9
  //   sub.next(Math.floor(Math.random() * 10));
  // });

  // // Exemple de Subject
  // subject$ = new Subject<number>();

  // // Exemple de BehaviorSubject
  // behaviorSubject$ = new BehaviorSubject<number>(0); // Valeur initiale = 0

  // constructor() {
  //   // Abonnement à l'Observable
  //   this.obs$.subscribe((data) => {
  //     console.log('Chaque abonnement reçoit une valeur différente générée lors de l\'abonnement');
  //     console.log('Observable - abonnement 1:', data);
  //   });
  //   this.obs$.subscribe((data) => {
  //     console.log('Observable - abonnement 2:', data);
  //   });
  //   this.obs$.subscribe((data) => {
  //     console.log('Observable - abonnement 3:', data);
  //   });

  //   // Abonnement au Subject
  //   this.subject$.subscribe((data) => {
  //     // Les abonnés reçoivent les valeurs émises après leur abonnement
  //     console.log('Subject - abonnement 1:', data);
  //   });
  //   this.subject$.next(1); // Émission de la valeur 1
  //   this.subject$.next(2); // Émission de la valeur 2

  //   // Les abonnés reçoivent les valeurs émises après leur abonnement
  //   this.subject$.subscribe((data) => {
  //     console.log('Subject - abonnement 2:', data);
  //   });
  //   this.subject$.next(3); // Émission de la valeur 3

  //   // Abonnement au BehaviorSubject
  //   this.behaviorSubject$.subscribe((data) => {
  //     // Les abonnés reçoivent la dernière valeur émise, ainsi que la valeur initiale
  //     console.log('BehaviorSubject - abonnement 1:', data);
  //   });
  //   this.behaviorSubject$.next(10); // Émission de la valeur 10
  //   this.behaviorSubject$.next(20); // Émission de la valeur 20

  //   // Les nouveaux abonnés reçoivent la dernière valeur émise
  //   this.behaviorSubject$.subscribe((data) => {
  //     console.log('BehaviorSubject - abonnement 2:', data);
  //   });
  // }
}
