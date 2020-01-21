import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
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

  constructor(
    private localDb: LocalDB, 
    private dialog: MatDialog,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.localDb.getAllRefs().then(data => this.references = data);
  }

  private editReference() {
    if (this.selectedReferences.length === 0) return this.notify('No entries selected');
    const ref = this.references.find(obj => obj.id === this.selectedReferences[0]);
    const dialogRef = this.dialog.open(LibraryModalComponent, {data: ref});
    dialogRef.afterClosed().subscribe(data => {
      if (!data) return;
      this.localDb.updateRef(data).then(result => {
        this.notify(result);
      });
    });
  }

  private exportReferences() {
    if (this.selectedReferences.length === 0) return this.notify('No references are selected')
    console.log('Exporting references');
  }

  private deleteReferences() {
    if (this.selectedReferences.length === 0) return this.notify('No references are selected')
    this.localDb.deleteData(this.selectedReferences);
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

  private notify(message) {
    this.snack.open(message, 'close', { duration: 2000 });
  }

}
