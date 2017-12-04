import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolelengthComponent } from './solelength.component';

describe('SolelengthComponent', () => {
  let component: SolelengthComponent;
  let fixture: ComponentFixture<SolelengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolelengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolelengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
