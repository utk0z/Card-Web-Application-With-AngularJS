import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComCardComponent } from './com-card.component';

describe('ComCardComponent', () => {
  let component: ComCardComponent;
  let fixture: ComponentFixture<ComCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
