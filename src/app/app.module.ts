import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemSelectedComponent } from './item-selected.component';
import { ItemSearchComponent }  from './item-search.component';
import { FlagFilterComponent }  from './flags-filter/flags-filter.component';

import { AlphabeticalOrderPipe } from './alphabetical-order.pipe';
import { FlagPipe } from './flags-filter/flags-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemSelectedComponent,
    ItemSearchComponent,
    FlagFilterComponent,
    AlphabeticalOrderPipe,
    FlagPipe
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
