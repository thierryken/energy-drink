import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Colonne2Component } from './colonne2.component';

describe('Colonne2Component', () => {
  let component: Colonne2Component;
  let fixture: ComponentFixture<Colonne2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Colonne2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Colonne2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
