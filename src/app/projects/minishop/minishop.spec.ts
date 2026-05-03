import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Minishop } from './minishop';

describe('Minishop', () => {
  let component: Minishop;
  let fixture: ComponentFixture<Minishop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Minishop],
    }).compileComponents();

    fixture = TestBed.createComponent(Minishop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
