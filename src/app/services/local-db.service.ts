import { Injectable } from '@angular/core';
import { IForm } from '../interfaces/form';

@Injectable({ providedIn: 'root' })

export class LocalDB {
  private dbName = 'referencerDb';
  private store = 'refs';
  private version = 1;
  private db;

  constructor() {}

  public startDB(): void {
    const request = indexedDB.open(this.dbName, this.version);
    request.onerror = () => console.log('Database failed to open');
    request.onsuccess = () => {
      console.log('Database opened successfully');
      this.db = request.result;
    };
    request.onupgradeneeded = () => {
      const options = { keyPath: 'id', autoIncrement: true };
      request.result.createObjectStore(this.store, options);
    };
  }

  public addData(data: IForm): void {
    const tx = this.db.transaction(this.store, 'readwrite').objectStore(this.store);
    const request = tx.add(data);
    request.onsuccess = () => {
      console.log(request);
    };
  }

  public getAllRefs(): Promise<Array<IForm>> {
    const promise = new Promise<Array<IForm>>((resolve, reject) => {
      const tx = this.db.transaction(this.store, 'readwrite').objectStore(this.store);
      const request = tx.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
    return promise; // will have to be an observable/subscription at some point
  }

  public updateRef(reference): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      const tx = this.db.transaction(this.store, 'readwrite').objectStore(this.store);
      const request = tx.put(reference);
      request.onsuccess = () => resolve('Record updated');
      request.onerror = () => resolve('There was an error');
    })
    return promise;
  }
  
  public deleteData(ids: Array<string>): void {
    const tx = this.db.transaction(this.store, 'readwrite').objectStore(this.store);
    ids.forEach(id => tx.delete(id));
  }

}
