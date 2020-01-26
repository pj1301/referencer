import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewReferenceComponent } from './pages/new-reference/new-reference.component';
import { LibraryComponent } from './pages/library/library.component';
import { SettingsComponent } from './pages/settings/settings.component';


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
