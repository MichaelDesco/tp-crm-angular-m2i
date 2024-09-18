import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  // Un BehaviorSubject
  numVersion$ = new BehaviorSubject<number>(1);
  constructor() {}

  incrementVersion() {
    this.numVersion$.next(this.numVersion$.value + 1);
    console.log('VersionService:', this.numVersion$.value +1);
  }
}
