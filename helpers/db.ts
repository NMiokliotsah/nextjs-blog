import { MongoClient } from 'mongodb';

async function getClient() {
  try {
    const client = await MongoClient.connect(process.env.DB_URL as string);

    return client;
  } catch (e) {
    throw 'Could not to get client';
  }
}

export async function closeConnectionDb() {
  try {
    const client = await getClient();

    client.close();
  } catch(e) {
    throw 'Could not close connection';
  }
}

export async function connectToDatabase() {
  try {
    const client = await getClient();
    const db = client!.db();

    return db;
  } catch (e) {
    throw 'Could not connect to database';
  }
}

export async function getCollection(db, name) {
  try {
    const collection = await db.collection(name)

    return collection;
  } catch (e) {
    throw 'Could not add new message';
  }
}
