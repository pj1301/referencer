import { Component, OnInit } from '@angular/core';
import { LocalDB } from './services/local-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'referencer';

  constructor(private localDb: LocalDB) {}

  ngOnInit() {
    this.localDb.startDB();
  }
}
