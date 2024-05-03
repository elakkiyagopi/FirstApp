import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-relation',
  templateUrl: './relation.component.html',
  styleUrl: './relation.component.scss'
})
export class RelationComponent {
    @Input() fam:any;
    @Output() close:EventEmitter<any> =new EventEmitter<any>;
    msg:any;

    constructor(){ }
    
    ngOnInit(){
      this.msg=this.fam?.message;
    }
    
    back(){
      this.close.emit();
    }
}
