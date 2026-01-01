import { config } from 'dotenv';
import { MongoClient, Db } from 'mongodb';
config();

const client = new MongoClient(process.env.MongoDB);

/**
 * @type {Db | null}
 */
let db = null;

/**
 * @returns {Promise<Db>}
 */
export async function connect() {
    try {
        if (!db) {
            await client.connect();
            db = client.db("users");
            console.log("Connected to MongoDB");
        }
        return db;
    } catch (err) {
        console.error(err);
    }
}


