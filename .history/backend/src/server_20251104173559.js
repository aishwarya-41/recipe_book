import express from "express"
import dotenv from "dotenv"
import cors from "cors"


const app = express();

// app.use(cors(
//     {
//         origin:"http://localhost:5173"
//     }
// ));
// app.use(express.json());

app.use("/api/notes",notesRoutes)

connectDB().then(() =>
{
    app.listen(5001, () => {
    console.log("Running in PORT 5001")
});
});
