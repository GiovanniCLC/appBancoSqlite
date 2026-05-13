import * as SQLite from 'expo-sqlite';
export type DB = SQLite.SQLiteDatabase

export async function getDB(): Promise<DB>{
    const db=await SQLite.openDatabaseAsync('escola.db')
    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS alunos(
        id Integer Primary Key Autoincrement
        nome Text NOT NULL,

        email TEXT NOT NULL);
        `)
        return db
}