import cors from "cors";
import express from "express";

import dbconnection from "./dbconnection.js";
import User from "./model/User.js";

const app = express();

dbconnection();

app.use(express.json());

app.use(cors());


// REGISTER API

app.post('/register', async (req, resp) => {

    try {

        const user = new User(req.body);

        let result = await user.save();

        result = result.toObject();

        delete result.password;

        resp.status(201).send(result);

    } catch (error) {

        console.log('Error in signup API:', error);

        resp.status(500).send({
            message: "Something went wrong"
        });

    }

});


// LOGIN API

app.post('/login', async (req, resp) => {

    try {

        if (!req.body.email || !req.body.password) {

            return resp.status(400).send({
                message: "Email and password are required"
            });

        }

        const user = await User.findOne({

            email: req.body.email,
            password: req.body.password

        }).select('-password');

        if (user) {

            resp.status(200).send(user);

        } else {

            resp.status(404).send({
                message: "Invalid email or password"
            });

        }

    } catch (err) {

        console.log('Error in login API:', err);

        resp.status(500).send({
            message: "Server Error"
        });

    }

});


app.listen(5000, () => {

    console.log('Server running on port 5000');

});