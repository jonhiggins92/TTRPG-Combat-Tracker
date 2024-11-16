import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatTrackerReportComponent } from './combat-tracker-report.component';

describe('CombatTrackerReportComponent', () => {
  let component: CombatTrackerReportComponent;
  let fixture: ComponentFixture<CombatTrackerReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombatTrackerReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombatTrackerReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
