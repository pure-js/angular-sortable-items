import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagsFilterComponent } from './flags-filter.component';

describe('FlagsFilterComponent', () => {
  let component: FlagsFilterComponent;
  let fixture: ComponentFixture<FlagsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
