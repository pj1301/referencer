import { Component } from '@angular/core';

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

  constructor() {}

  public submitForm() {
    console.log({author: this.author, publication: this.publication, publisher: this.publisher, year: this.year, url: this.url});
    this.author = '';
    this.publication = '';
    this.publisher = '';
    this.year = '';
    this.url = '';
  }
}
