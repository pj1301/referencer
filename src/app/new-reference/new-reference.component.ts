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
  private accessed: Date;
  private author: string = '';
  private city: string = '';
  private edition: string = '';
  private id: string = '';
  private online: boolean = false;
  private pages: string = '';
  private publication: string = '';
  private publisher: string = '';
  private title: string = '';
  private url: string = '';
  private year: string = '';

  constructor(private localDb: LocalDB) {}

  public submitForm(): void {
    const data = this.createFormObject();
    this.localDb.addData(data);
    this.clearData();
  }

  private createFormObject(): IForm {
    const form = {
      accessed: new Date(),
      author: this.author,
      city: this.city,
      edition: this.edition,
      id: v1(),
      online: this.online,
      pages: this.pages,
      publication: this.publication,
      publisher: this.publisher,
      title: this.title,
      url: this.url,
      year: this.year
    };
    return form;
  }

  private clearData(): void {
    this.accessed = null;
    this.author = '';
    this.city = '';
    this.edition = '';
    this.id = '';
    this.online = false;
    this.pages = '';
    this.publication = '';
    this.publisher = '';
    this.title = '';
    this.url = '';
    this.year = '';
  }

}
