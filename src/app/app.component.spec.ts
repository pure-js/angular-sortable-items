import { BrowserModule } from '@angular/platform-browser';
import { TestBed, async } from '@angular/core/testing';
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


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule,
        BrowserModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
      ],
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
      providers: [
        HttpClientModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular sortable items');
  }));
  it('should render title in a h1 tag', async((done) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('label').textContent).toEqual('Sort a-z:');
  }));
});
