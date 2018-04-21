import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsWriterComponent } from './sports-writer.component';

describe('SportsWriterComponent', () => {
  let component: SportsWriterComponent;
  let fixture: ComponentFixture<SportsWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
