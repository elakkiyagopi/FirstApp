import { Component } from '@angular/core';
import { BillServiceService } from '../bill-service.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.scss'
})
export class BillComponent {

  msg: string = "Ilakss";

  // constructor(private billService: BillServiceService){
  //   this.msg=this.getMsg();
  //   console.log(this.msg);
  // }

  // getMsg(){
  //   return this.msg;
  // }

}
