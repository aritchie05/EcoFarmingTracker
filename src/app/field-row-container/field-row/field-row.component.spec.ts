import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldRowComponent } from './field-row.component';

describe('FieldRowComponent', () => {
  let component: FieldRowComponent;
  let fixture: ComponentFixture<FieldRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
