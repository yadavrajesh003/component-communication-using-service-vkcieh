import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor() { }

  private newUser = new BehaviorSubject<any>({
    firstName: 'Rajesh',
    email: 'rajesh@abc.com',
    gender: 'M'
  });

  setNewUserInfo(user: any) {
    this.newUser.next(user);
  }

  getNewUserInfo() {
    return this.newUser.asObservable();
  }




}