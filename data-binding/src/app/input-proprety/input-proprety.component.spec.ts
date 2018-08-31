import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropretyComponent } from './input-proprety.component';

describe('InputPropretyComponent', () => {
  let component: InputPropretyComponent;
  let fixture: ComponentFixture<InputPropretyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPropretyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPropretyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
