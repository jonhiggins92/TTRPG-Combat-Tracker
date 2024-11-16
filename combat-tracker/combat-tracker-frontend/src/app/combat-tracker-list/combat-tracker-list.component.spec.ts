import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombatTrackerListComponent } from './combat-tracker-list.component';

describe('CombatTrackerListComponent', () => {
  let component: CombatTrackerListComponent;
  let fixture: ComponentFixture<CombatTrackerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CombatTrackerListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CombatTrackerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
