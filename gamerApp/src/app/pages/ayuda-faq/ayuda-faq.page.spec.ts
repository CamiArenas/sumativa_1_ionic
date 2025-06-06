import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AyudaFaqPage } from './ayuda-faq.page';

describe('AyudaFaqPage', () => {
  let component: AyudaFaqPage;
  let fixture: ComponentFixture<AyudaFaqPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AyudaFaqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
