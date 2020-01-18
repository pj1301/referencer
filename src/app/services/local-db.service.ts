import { Injectable } from '@angular/core';
import { IForm } from '../interfaces/form';

@Injectable({ providedIn: 'root' })

export class LocalDB {
  private dbName = 'referencerDb';
  private storeName = 'refs';
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
      request.result.createObjectStore(this.storeName, options);
    };
  }

  public addData(data: IForm): void {
    const tx = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
    const request = tx.add(data);
    request.onsuccess = () => {
      console.log(request);
    };
  }

  public async getAllRefs(): Promise<Array<IForm>> {
    const promise = new Promise<Array<IForm>>((resolve, reject) => {
      const tx = this.db.transaction(this.storeName, 'readwrite').objectStore(this.storeName);
      const data = tx.getAll();
      data.onsuccess = () => resolve(data.result);
      data.onerror = () => reject(data.error);
    });
    return promise;
  }

  public deleteData(): void {
    console.log('deleting data');
  }

}
