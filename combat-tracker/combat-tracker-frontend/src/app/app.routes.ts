import { Routes } from '@angular/router';
import { CombatTrackerListComponent } from './combat-tracker-list/combat-tracker-list.component';
import { CombatTrackerAddComponent } from './combat-tracker-add/combat-tracker-add.component';

export const routes: Routes = [
  { path: 'list', component: CombatTrackerListComponent },
  { path: 'add', component: CombatTrackerAddComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },  // Default to "list"
];
