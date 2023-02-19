import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotsAndBoxesComponent } from './dots-and-boxes.component';

describe('DotsAndBoxesComponent', () => {
  let component: DotsAndBoxesComponent;
  let fixture: ComponentFixture<DotsAndBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotsAndBoxesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotsAndBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
