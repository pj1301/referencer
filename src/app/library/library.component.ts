import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LibraryModalComponent } from './modal/library-modal.component';
import { LocalDB } from '../services/local-db.service';
import { IForm } from '../interfaces/form';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})

export class LibraryComponent implements OnInit {
  private references: Array<IForm>;
  private refToDisplay: IForm;
  private selectedReferences: any = [];

  constructor(private localDb: LocalDB, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.localDb.getAllRefs().then(data => this.references = data);
  }

  private editReference() {
    const ref = this.references.find(obj => obj.id === this.selectedReferences[0]);
    const dialogRef = this.dialog.open(LibraryModalComponent, ref);
  }

  private displayInfo(id: string): void {
    this.refToDisplay = this.references.find(ref => ref.id === id);
  }

  private addToList(id: string) {
    if (this.selectedReferences.includes(id)) {
      return this.selectedReferences = this.selectedReferences.filter(ref => ref !== id);
    }
    this.selectedReferences.push(id);
  }

}
