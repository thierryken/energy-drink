import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBasComponent } from './content-bas.component';

describe('ContentBasComponent', () => {
  let component: ContentBasComponent;
  let fixture: ComponentFixture<ContentBasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentBasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
