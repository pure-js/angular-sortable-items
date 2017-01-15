import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ItemComponent } from './item.component';
import { ItemSelectedComponent } from './item-selected.component';

import { AlphabeticaOrderPipe } from './alphabetical-order.pipe';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ItemComponent,
    ItemSelectedComponent,
    AlphabeticaOrderPipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
