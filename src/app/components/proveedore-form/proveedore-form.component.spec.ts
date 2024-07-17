import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoreFormComponent } from './proveedore-form.component';

describe('ProveedoreFormComponent', () => {
  let component: ProveedoreFormComponent;
  let fixture: ComponentFixture<ProveedoreFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProveedoreFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedoreFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
