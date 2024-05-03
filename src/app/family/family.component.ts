import { Component } from '@angular/core';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrl: './family.component.scss'
})
export class FamilyComponent {
  data: any = [
    { "name": "Gopi", "message": "My Father" },
    { "name": "Nirmala", "message": "My Mother" },
    { "name": "Elakkiya", "message": "It's me vinotham" },
    { "name": "Baviya", "message": "My Sista" }
  ];
  sdata: any;
  showParent: boolean = true;
  namee='';
  secret=false;

  sendData(data: any) {
    this.sdata = data;
    this.showParent=false;
  }
  
  open(){
    this.showParent=true;
  }

  textt(event:Event){
    this.namee=(<HTMLInputElement>event.target).value;

  }
}
