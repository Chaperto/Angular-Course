import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivsCustomizadasComponent } from './diretivs-customizadas.component';

describe('DiretivsCustomizadasComponent', () => {
  let component: DiretivsCustomizadasComponent;
  let fixture: ComponentFixture<DiretivsCustomizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivsCustomizadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivsCustomizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
