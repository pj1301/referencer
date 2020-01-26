import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  private quota: number;
  private usage: number;
  private mbUsage: string;
  private percentage: string;

  constructor() {}
  
  async ngOnInit() {
    const nav = await window.navigator.storage.estimate();
    this.quota = nav.quota;
    this.usage = nav.usage;
    this.percentage = Math.round((nav.usage / nav.quota) * 100).toString();
    const mbValue: string = (this.usage / 1000000).toFixed(2);
    this.mbUsage = parseFloat(mbValue) < 1 ? '<1' : mbValue;
  }


}
