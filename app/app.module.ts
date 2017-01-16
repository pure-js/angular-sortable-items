import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ItemListComponent } from './item-list.component';
import { ItemSelectedComponent } from './item-selected.component';

import { AlphabeticalOrderPipe } from './alphabetical-order.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemSelectedComponent,
    AlphabeticalOrderPipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
