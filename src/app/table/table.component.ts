import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns = [];
  dataSource = new MatTableDataSource<any>(SCORECARD_DATA);
  numOfHoles: number = 9;

  constructor() {
    this.displayedColumns.push('player');
    for (let i = 0; i < this.numOfHoles; i++) {
      const name = `${i + 1}`;
      this.displayedColumns.push(name);
    }
    this.displayedColumns.push('total');
  }

  ngOnInit() {
  }
}

const SCORECARD_DATA: any[] = [
  {
    'player': 'text input',
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0,
    'total': 0
  },
]
