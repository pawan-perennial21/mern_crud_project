import express, { json } from "express";
import cors from "cors";
import db from "./config/db.js";
import router from "./routes/router.js";
import { handleErrors } from "./middleware/error.js";

const app = express();
const port = process.env.PORT || 8003;

app.use(json());
app.use(cors());
app.use(router);
app.use(handleErrors);


async function connectToDatabase() {
    try {
        await db; // Assuming db is a promise that resolves when the connection is established
        console.log("Connected to the database");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error("Failed to connect to the database", error);
    }
}

connectToDatabase();