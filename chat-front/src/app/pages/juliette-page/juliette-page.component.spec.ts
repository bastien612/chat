import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuliettePageComponent } from './juliette-page.component';

describe('JuliettePageComponent', () => {
  let component: JuliettePageComponent;
  let fixture: ComponentFixture<JuliettePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuliettePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuliettePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
