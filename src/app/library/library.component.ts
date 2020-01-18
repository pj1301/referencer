import { Component, OnInit } from '@angular/core';
import { LocalDB } from '../services/local-db.service';
import { IForm } from '../interfaces/form';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})

export class LibraryComponent implements OnInit {
  private references: Array<IForm>;
  private selectedRef: IForm;

  constructor(private localDb: LocalDB) {}

  ngOnInit(): void {
    this.localDb.getAllRefs().then(data => this.references = data);
  }

  selectEntry(id: string): void {
    const selected = this.references.find(item => item.id === id);
    this.selectedRef = selected;
  }

}
