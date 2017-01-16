import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ItemListComponent } from './item-list.component';
import { ItemSelectedComponent } from './item-selected.component';

import { AlphabeticalOrderPipe } from './alphabetical-order.pipe';
import { FetchJsonPipe } from './fetch-json.pipe';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemSelectedComponent,
    AlphabeticalOrderPipe,
    FetchJsonPipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
