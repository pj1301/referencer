import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-warning-modal',
  templateUrl: './warning-modal.component.html',
  styleUrls: ['./warning-modal.component.scss']
})

export class WarningModalComponent {

  constructor(public dialogRef: MatDialogRef<WarningModalComponent>) {}
}