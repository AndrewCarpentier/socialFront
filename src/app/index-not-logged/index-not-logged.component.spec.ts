import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexNotLoggedComponent } from './index-not-logged.component';

describe('IndexNotLoggedComponent', () => {
  let component: IndexNotLoggedComponent;
  let fixture: ComponentFixture<IndexNotLoggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexNotLoggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexNotLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
