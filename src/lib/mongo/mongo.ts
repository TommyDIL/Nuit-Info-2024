import { MongoClient } from "mongodb";
import { SECRET_MONGO_URL } from "$env/static/private";

const client = new MongoClient(SECRET_MONGO_URL);

export const add_score_mongo = async (name:string,score:number) => {
    await client.connect();
    const db = client.db("score");
    const collection = db.collection("score");
    const result = await collection.insertOne({name:name,score:score});
    await client.close();
    return result;
};

export const get_all_score_mongo = async () => {
    //order on score
    await client.connect();
    const db = client.db("score");
    const collection = db.collection("score");
    const result = await collection.find().sort({ score: -1 }).toArray();
    await client.close();
};

export const test_connection = async ()  => {
    try {
        await client.connect();
        await client.close();
        return true;
    }
    catch (e) {
        return false;
    }
}