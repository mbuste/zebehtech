import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotraitsComponent } from './potraits.component';

describe('PotraitsComponent', () => {
  let component: PotraitsComponent;
  let fixture: ComponentFixture<PotraitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotraitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
