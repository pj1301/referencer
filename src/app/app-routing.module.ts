import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewReferenceComponent } from './new-reference/new-reference.component';
import { LibraryComponent } from './library/library.component';


const routes: Routes = [
  { path: '', component: NewReferenceComponent },
  { path: 'library', component: LibraryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
