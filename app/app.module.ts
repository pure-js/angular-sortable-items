import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ItemListComponent } from './item-list.component';
import { ItemSelectedComponent } from './item-selected.component';

import { AlphabeticalOrderPipe } from './alphabetical-order.pipe';

@NgModule({
  imports: [
    BrowserModule
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
