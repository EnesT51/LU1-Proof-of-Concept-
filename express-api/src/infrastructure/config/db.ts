import { MongoClient, Db } from 'mongodb';
import * as dotenv from 'dotenv';
dotenv.config();
// Replace the uri string with your MongoDB deployment's connection string.

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@db.jwngav9.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.DB_NAME}`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

let client: MongoClient;
let db: Db;

export async function connectDb() {

    if (!client) {
        client = new MongoClient(uri);
        await client.connect();
        db = client.db(process.env.DB_NAME);
        console.log("Connected to MongoDB", db.databaseName);
    }
    return db;
}
export function getDb(): Db {
    if (!db) {
        throw new Error("Database not connected. Call connectDb first.");
    }
    return db;
}