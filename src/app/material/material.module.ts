import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule, 
  MatCheckboxModule, 
  MatDialogModule, 
  MatFormFieldModule, 
  MatInputModule,
  MatSnackBarModule 
} from '@angular/material';

const MaterialComponents = [
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule, 
  MatSnackBarModule
];

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialComponents],
  exports: [MaterialComponents]
})

export class MaterialModule { }
