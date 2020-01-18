import { Component, OnInit } from '@angular/core';
import { LocalDB } from './services/local-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'referencer';

  constructor(private router: Router, private localDb: LocalDB) {}

  ngOnInit(): void {
    this.router.navigate(['']);
    this.localDb.startDB();
  }
}
