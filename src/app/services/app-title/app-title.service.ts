import {Injectable} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppTitleService {
  private subject: Subject<string> = new Subject<string>();

  constructor() {
  }

  subscribe(title: (value: string) => void): Subscription {
    return this.subject.subscribe(title);
  }

  next(title: string) {
    this.subject.next(title);
  }
}
