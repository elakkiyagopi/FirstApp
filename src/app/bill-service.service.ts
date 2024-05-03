import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillServiceService {

  constructor() { }

  getMsg(){
    return 'ilaks';
  }
}
