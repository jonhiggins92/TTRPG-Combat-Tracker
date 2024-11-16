import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatTrackerUpdateComponent } from './combat-tracker-update.component';

describe('CombatTrackerUpdateComponent', () => {
  let component: CombatTrackerUpdateComponent;
  let fixture: ComponentFixture<CombatTrackerUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombatTrackerUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombatTrackerUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
