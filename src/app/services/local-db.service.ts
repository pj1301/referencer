import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class LocalDB {
  private dbName = 'referencerDb';
  private storeName = 'refs';
  private version = 1;
  private db;

  constructor() {}

  startDB() {
    const request = indexedDB.open(this.dbName, this.version);
    request.onerror = () => console.log('Database failed to open');

    request.onsuccess = () => {
      console.log('Database opened successfully');
      this.db = request.result;
    };

    request.onupgradeneeded = () => {
      request.result.createObjectStore(this.storeName, { autoIncrement: true });
    };
  }

  addData(data) {
    const transaction = db.transaction(this.storeName, 'readwrite');
    const objectStore = transaction.objectStore(this.storeName);
    objectStore.put(data)
  }

}
