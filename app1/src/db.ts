import Dexie, { Table } from "dexie";

export interface Record {
    id?: number,
    test1: string,
    test2: string,
    test3: string,
    test4: string,
    test5: string,
}

export class AppDatabase extends Dexie {
    myRecords!: Table<Record>

    constructor() {
        super('TestDatabase');
        this.version(1).stores({
            myRecords: '++id, test1, test2, test3, test4, test5'
        })
    }
}

export const db = new AppDatabase()