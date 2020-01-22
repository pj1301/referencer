import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewReferenceComponent } from './new-reference/new-reference.component';
import { LibraryComponent } from './library/library.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EditModalComponent } from './library/edit-modal/edit-modal.component';
import { ExportModalComponent } from './library/export-modal/export-modal.component';
import { WarningModalComponent } from './warning-modal/warning-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NewReferenceComponent,
    LibraryComponent,
    EditModalComponent,
    ExportModalComponent,
    WarningModalComponent
  ],
  entryComponents: [EditModalComponent, ExportModalComponent, WarningModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
