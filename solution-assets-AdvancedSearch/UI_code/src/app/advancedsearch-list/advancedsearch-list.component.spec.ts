import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedsearchListComponent } from './advancedsearch-list.component';

describe('AdvancedsearchListComponent', () => {
  let component: AdvancedsearchListComponent;
  let fixture: ComponentFixture<AdvancedsearchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedsearchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedsearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
