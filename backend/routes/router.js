import express from "express";
const router = express.Router();
import db from "../config/db.js";

// Todo: Function to execute a database query
const executeQuery = (query, params) => {
    return new Promise((resolve, reject) => {
        db.query(query, params, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

// Todo:- Route for creating a new user
router.post("/create", async (req, res, next) => {
    try {
        const { userName, email, job, mobile } = req.body;
        if (!userName || !email || !job || !mobile) {
            // Todo:-  data is missing or incomplete would be 422 Unprocessable Entity.
            return res.status(422).json("Please fill in all data");
        }

        // Todo:-Check if the user already exists
        const [existingUser] = await executeQuery(
            "SELECT * FROM users WHERE email = ?",
            [email]
        );
        if (existingUser) {
            // Todo:-409 status code indicate to the client that the user already exists
            return res.status(409).json("User already exists");
        }

        const newUser = { userName, email, job, mobile };
        // Todo:- Insert the new user into the database
        await executeQuery("INSERT INTO users SET ?", newUser);

        res.status(201).json(newUser);
    } catch (err) {
        next(err);
    }
});

// Todo:- Route for retrieving all users
router.get("/getusers", async (req, res, next) => {
    try {
        // Todo:- Retrieve all users from the database
        const result = await executeQuery("SELECT * FROM users");
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
});

// Todo:- Route for deleting a user by ID
router.delete("/deleteuser/:id", async (req, res, next) => {
    try {
        const { id } = req.params;

        // Todo:- Delete the user with the specified ID from the database
        const result = await executeQuery(
            "DELETE FROM users WHERE id = ?",
            [id]
        );
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
});

// Todo:- Route for retrieving a single user by ID
router.get("/getsingleuser/:id", async (req, res, next) => {
    try {
        const { id } = req.params;

        // Todo:- Retrieve the user with the specified ID from the database
        const result = await executeQuery(
            "SELECT * FROM users WHERE id = ?",
            [id]
        );
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
});


export default router;