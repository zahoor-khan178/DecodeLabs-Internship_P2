import mongoose from "mongoose";

const dbconnection = async () => {

    try {

        await mongoose.connect("mongodb://127.0.0.1:27017/codlab_project2");

        console.log("db successfully  Connected to the localhost");

    } catch (err) {

        console.log("error while connecting to the database",err);

    }
}

export default dbconnection;