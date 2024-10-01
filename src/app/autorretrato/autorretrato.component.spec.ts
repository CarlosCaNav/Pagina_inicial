import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorretratoComponent } from './autorretrato.component';

describe('AutorretratoComponent', () => {
  let component: AutorretratoComponent;
  let fixture: ComponentFixture<AutorretratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorretratoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorretratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
