import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gneric } from './gneric';

describe('Gneric', () => {
  let component: Gneric;
  let fixture: ComponentFixture<Gneric>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gneric],
    }).compileComponents();

    fixture = TestBed.createComponent(Gneric);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
