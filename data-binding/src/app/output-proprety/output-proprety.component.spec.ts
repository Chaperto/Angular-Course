import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPropretyComponent } from './output-proprety.component';

describe('OutputPropretyComponent', () => {
  let component: OutputPropretyComponent;
  let fixture: ComponentFixture<OutputPropretyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputPropretyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPropretyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
