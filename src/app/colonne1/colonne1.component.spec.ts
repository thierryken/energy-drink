import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Colonne1Component } from './colonne1.component';

describe('Colonne1Component', () => {
  let component: Colonne1Component;
  let fixture: ComponentFixture<Colonne1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Colonne1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Colonne1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
