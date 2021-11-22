import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mensajes2Component } from './mensajes2.component';

describe('Mensajes2Component', () => {
  let component: Mensajes2Component;
  let fixture: ComponentFixture<Mensajes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mensajes2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mensajes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
