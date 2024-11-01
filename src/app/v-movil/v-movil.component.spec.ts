import { ComponentFixture, TestBed } from '@angular/core/testing';

import { vSimplieComponent } from './v-movil.component';

describe('vSimplieComponent', () => {
  let component: vSimplieComponent;
  let fixture: ComponentFixture<vSimplieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [vSimplieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(vSimplieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
