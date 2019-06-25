import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BastienPageComponent } from './bastien-page.component';

describe('BastienPageComponent', () => {
  let component: BastienPageComponent;
  let fixture: ComponentFixture<BastienPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BastienPageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BastienPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
