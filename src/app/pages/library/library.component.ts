import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { EditModalComponent } from './edit-modal/edit-modal.component';
import { LocalDB } from '../../services/local-db.service';
import { IForm } from '../../interfaces/form';
import { ExportModalComponent } from './export-modal/export-modal.component';
import { WarningModalComponent } from '../warning-modal/warning-modal.component';
import { v1 } from 'uuid';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})

export class LibraryComponent implements OnInit {
  private references: Array<IForm>;
  private refToDisplay: IForm;
  private selectedReferences: Array<any> = [];
  private referenceCollection: Array<any> = [];

  constructor(
    private localDb: LocalDB, 
    private dialog: MatDialog,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.localDb.getAllRefs().then(data => this.references = data);
  }

  private newOrEdit(): void {
    if (this.selectedReferences.length === 0) return this.newReference();
    this.editReference();
  }

  private newReference(): void {
    const ref = { 
      author: '',
      city: '',
      edition: '',
      id: v1(),
      online: false,
      pages: '',
      publication: '',
      publisher: '',
      title: '',
      url: '',
      year: '',
     }
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '70vw',
      data: { content: ref, type: 'new' }
    });
    dialogRef.afterClosed().subscribe(res => {
      const data = {...res, accessed: new Date()}
      this.localDb.addData(data).subscribe(res => {
        if (res.error) return this.notify('There was an error');
        this.references.push(data);
        this.notify('New reference added');
      });
    }); 
  }

  private editReference(): void {
    const ref = this.references.find(obj => obj.id === this.selectedReferences[0]);
    const dialogRef = this.dialog.open(EditModalComponent, {
      width: '70vw',
      data: { content: ref, type: 'edit' }
    });
    dialogRef.afterClosed().subscribe(data => {
      if (!data) return;
      this.localDb.updateRef(data).then(result => {
        this.notify(result);
      });
    });
  }

  private exportReferences(): void {
    this.referenceCollection = [];
    if (this.selectedReferences.length === 0) return this.notify('No references are selected')
    this.selectedReferences.forEach(refId => {
      const refInfo = this.findRefInfo(refId);
      const reference = this.createReference(refInfo);
      this.referenceCollection.push(reference);
    });
    const dialogRef = this.dialog.open(ExportModalComponent, {
      width: '70vw',
      data: this.referenceCollection
    })
  }

  private deleteReferences(): any {
    if (this.selectedReferences.length === 0) return this.notify('No references are selected')
    const dialogRef = this.dialog.open(WarningModalComponent);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.references = this.references.filter(ref => !this.selectedReferences.includes(ref.id));
        this.localDb.deleteData(this.selectedReferences)
      };
    });
  }

  private displayInfo(id: string): void {
    this.refToDisplay = this.findRefInfo(id);
  }

  private addToList(id: string) {
    if (this.selectedReferences.includes(id)) {
      return this.selectedReferences = this.selectedReferences.filter(ref => ref !== id);
    }
    this.selectedReferences.push(id);
  }

  private isChecked(id: string): boolean {
    return this.selectedReferences.includes(id) ? true : false;
  }

  private findRefInfo(id: string) {
    return this.references.find(ref => ref.id === id);
  }

  private createReference(refInfo: any) {
    const ref = [];
    ref.push(`${refInfo.author} `);
    ref.push(`(${refInfo.year}) `);
    if (refInfo.title) ref.push(`${refInfo.title}, `);
    if (refInfo.publication) ref.push(`${refInfo.publication}, `);
    if (refInfo.online) ref.push(`[Online]. `)
    return ref.join('');
  }

  private allReferences() {
    if (this.selectedReferences.length > 0) return this.selectedReferences = [];
    return this.selectedReferences = this.references.map(ref => ref.id);
  }

  private notify(message): void {
    this.snack.open(message, 'close', { duration: 2000 });
  }

}
