import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexLoggedComponent } from './index-logged.component';

describe('IndexLoggedComponent', () => {
  let component: IndexLoggedComponent;
  let fixture: ComponentFixture<IndexLoggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexLoggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexLoggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
