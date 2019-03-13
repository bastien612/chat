import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdelePageComponent } from './adele-page.component';

describe('AdelePageComponent', () => {
  let component: AdelePageComponent;
  let fixture: ComponentFixture<AdelePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdelePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdelePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
