const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'test';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('test');

  // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
  // const findResult = await collection.find({ a: 1 }).toArray();
  const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
  console.log('Updated documents =>', updateResult);
  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());