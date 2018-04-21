import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueOwnerComponent } from './league-owner.component';

describe('LeagueOwnerComponent', () => {
  let component: LeagueOwnerComponent;
  let fixture: ComponentFixture<LeagueOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
