import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BillComponent } from './bill/bill.component';
import { FamilyComponent } from './family/family.component';
import { RelationComponent } from './family/relation/relation.component';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BillComponent,
    FamilyComponent,
    RelationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
