import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';

import { AlphabeticalOrderPipe } from './alphabetical-order.pipe';
import { FlagsFilterComponent } from './flags-filter/flags-filter.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemListComponent } from './item-list/item-list.component';
import { TextFilterComponent } from './text-filter/text-filter.component';
import { TextFilterPipe } from './text-filter.pipe';
import { FlagsFilterPipe } from './flags-filter.pipe';

import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    AlphabeticalOrderPipe,
    FlagsFilterComponent,
    ItemDetailComponent,
    ItemListComponent,
    TextFilterComponent,
    TextFilterPipe,
    FlagsFilterPipe,
  ],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
