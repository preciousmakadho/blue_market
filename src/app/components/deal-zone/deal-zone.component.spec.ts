import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealZoneComponent } from './deal-zone.component';

describe('DealZoneComponent', () => {
  let component: DealZoneComponent;
  let fixture: ComponentFixture<DealZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
