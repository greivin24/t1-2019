import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeComponentComponent } from './acerca-de-component.component';

describe('AcercaDeComponentComponent', () => {
  let component: AcercaDeComponentComponent;
  let fixture: ComponentFixture<AcercaDeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercaDeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercaDeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
