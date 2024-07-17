import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoreListComponent } from './proveedore-list.component';

describe('ProveedoreListComponent', () => {
  let component: ProveedoreListComponent;
  let fixture: ComponentFixture<ProveedoreListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProveedoreListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveedoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
