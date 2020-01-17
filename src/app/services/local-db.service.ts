import { Injectable } from '@angular/core';
import { openDB, DBSchema } from 'idb';

@Injectable({ providedIn: 'root' })

export class LocalDB {
  private dbName = 'referencerDb';
  private storeName = 'refs';
  private version = 1;

  constructor() {}

  async insertData() {
    const db = await openDB(this.dbName, this.version, {
      upgrade(db) {
        db.createObjectStore(this.storeName, { autoIncrement: true });
        const refStore = db.createObjectStore()
      }
    })
  }

}
