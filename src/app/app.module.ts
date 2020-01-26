import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NewReferenceComponent } from './pages/new-reference/new-reference.component';
import { LibraryComponent } from './pages/library/library.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EditModalComponent } from './pages/library/edit-modal/edit-modal.component';
import { ExportModalComponent } from './pages/library/export-modal/export-modal.component';
import { WarningModalComponent } from './pages/warning-modal/warning-modal.component';
import { SettingsComponent } from './pages/settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewReferenceComponent,
    LibraryComponent,
    EditModalComponent,
    ExportModalComponent,
    WarningModalComponent,
    SettingsComponent
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
