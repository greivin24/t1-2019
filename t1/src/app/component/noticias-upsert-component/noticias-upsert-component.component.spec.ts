import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasUpsertComponentComponent } from './noticias-upsert-component.component';

describe('NoticiasUpsertComponentComponent', () => {
  let component: NoticiasUpsertComponentComponent;
  let fixture: ComponentFixture<NoticiasUpsertComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasUpsertComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasUpsertComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
