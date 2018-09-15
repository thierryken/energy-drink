import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentHautComponent } from './content-haut.component';

describe('ContentHautComponent', () => {
  let component: ContentHautComponent;
  let fixture: ComponentFixture<ContentHautComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentHautComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentHautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
