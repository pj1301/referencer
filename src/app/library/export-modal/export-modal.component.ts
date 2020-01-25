import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-export-modal',
  templateUrl: './export-modal.component.html',
  styleUrls: ['./export-modal.component.scss']
})

export class ExportModalComponent {
  private text: string;

  constructor(
    public dialogRef: MatDialogRef<ExportModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.text = this.data.join('\n\n');
    }

    copyText() {
      const text: any = document.querySelector('#ref-area');
      text.select();
      document.execCommand('copy');
      this.dialogRef.close();
    }

}