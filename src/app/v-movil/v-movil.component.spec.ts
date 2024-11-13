import { ComponentFixture, TestBed } from '@angular/core/testing';

import { vSimpleComponent } from './v-movil.component';

describe('vSimpleComponent', () => {
  let component: vSimpleComponent;
  let fixture: ComponentFixture<vSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [vSimpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(vSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
