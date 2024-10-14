import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMovilComponent } from './v-movil.component';

describe('VMovilComponent', () => {
  let component: VMovilComponent;
  let fixture: ComponentFixture<VMovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VMovilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VMovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
