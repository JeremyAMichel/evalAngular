import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintStatistiqueComponent } from './print-statistique.component';

describe('PrintStatistiqueComponent', () => {
  let component: PrintStatistiqueComponent;
  let fixture: ComponentFixture<PrintStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintStatistiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
