import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutAddTemplateComponent } from './produt-add-template.component';

describe('ProdutAddTemplateComponent', () => {
  let component: ProdutAddTemplateComponent;
  let fixture: ComponentFixture<ProdutAddTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutAddTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutAddTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
