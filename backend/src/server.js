import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import routes from "./routes.js"
import { connectDB } from "./db.js";


const app = express();

dotenv.config();

app.use(cors(
    {
        origin:"http://localhost:5173"
    }
));

app.use(express.json());

app.use("/api/recipes",routes);

connectDB().then(() =>
{
    app.listen(5001, () => {
    console.log("Running in PORT 5001")
});
});



