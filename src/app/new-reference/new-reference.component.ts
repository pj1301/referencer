import { Component } from '@angular/core';
import { LocalDB } from '../services/local-db.service';
import { IForm } from '../interfaces/form';
import { v1 } from 'uuid';

@Component({
  selector: 'app-new-reference',
  templateUrl: './new-reference.component.html',
  styleUrls: ['./new-reference.component.scss']
})

export class NewReferenceComponent {
  private author: string;
  private publication: string;
  private publisher: string;
  private year: string;
  private url: string;
  private title: string;
  private id: string;

  constructor(private localDb: LocalDB) {}

  public submitForm(): void {
    const data = this.createFormObject();
    this.localDb.addData(data);
    this.clearData();
  }
  private createFormObject(): IForm {
    const form = {
      author: this.author,
      publication: this.publication,
      publisher: this.publisher,
      year: this.year,
      url: this.url,
      title: this.title,
      id: v1()
    };
    return form;
  }

  private clearData(): void {
    this.title = '';
    this.author = '';
    this.publication = '';
    this.publisher = '';
    this.year = '';
    this.url = '';
    this.id = '';
  }

}
