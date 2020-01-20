import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-library-modal',
  templateUrl: './library-modal.component.html',
  styleUrls: ['./library-modal.component.scss']
})

export class LibraryModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
