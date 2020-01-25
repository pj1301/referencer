import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewReferenceComponent } from './new-reference/new-reference.component';
import { LibraryComponent } from './library/library.component';
import { SettingsComponent } from './settings/settings.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: NewReferenceComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
