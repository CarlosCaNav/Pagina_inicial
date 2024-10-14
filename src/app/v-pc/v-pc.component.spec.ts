import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VPcComponent } from './v-pc.component';

describe('VPcComponent', () => {
  let component: VPcComponent;
  let fixture: ComponentFixture<VPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VPcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
