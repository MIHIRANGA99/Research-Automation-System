import mongoose from "mongoose";

let db;

const connect = async () => {
    const MONGODB_URL = process.env.MONGO_URL;
    if(db) return;
    await mongoose.connect(MONGODB_URL)
        .then((conn) => {
            db = conn;
            console.log("✔️ mongodb connection successful!")
        })
        .catch((err) => {
            console.log(`❌ ${err.message}`)
        })
}

export { connect };