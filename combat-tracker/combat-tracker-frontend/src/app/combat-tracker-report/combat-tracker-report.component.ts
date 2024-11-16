import { Component, OnInit } from '@angular/core';
import { CombatTrackerService } from '../combat-tracker.service';
import { CombatTrackerEntry } from '../combat-tracker-entry.model';
import {CommonModule, NgForOf} from "@angular/common";

@Component({
  selector: 'app-combat-tracker-report',
  standalone: true,
  templateUrl: './combat-tracker-report.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./combat-tracker-report.component.css']
})
export class CombatTrackerReportComponent implements OnInit {
  reportData: CombatTrackerEntry[] = [];

  constructor(private combatTrackerService: CombatTrackerService) {}

  ngOnInit(): void {
    this.fetchReport();
  }

  fetchReport(): void {
    this.combatTrackerService.getEntries().subscribe(
      (data: CombatTrackerEntry[]) => {
        this.reportData = data;
      },
      (error) => {
        console.error('Error fetching report', error);
      }
    );
  }

  exportToCSV(): void {
    const csvData = this.reportData.map(entry => ({
      'Character Name': entry.characterName,
      'Player Name': entry.playerName,
      'Initiative': entry.initiative,
      'Health': entry.health,
      'Timestamp': entry.timestamp
    }));

    const csvContent = 'data:text/csv;charset=utf-8,' +
      ['Character Name,Player Name,Initiative,Health,Timestamp']
        .concat(csvData.map(row =>
          Object.values(row).join(',')
        ))
        .join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'combat_tracker_report.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
