import express, { Application, json } from "express";
import { createMovie, deleteMovie, readMovies, retriveMovies, updateMovie } from "./logic";
import { startDatabase } from "./database";
import { verifyId, verifyName } from "./middlewares";

const app: Application = express();
app.use(json());

app.get("/movies", readMovies);
app.get("/movies/:id", verifyId, retriveMovies);

app.post("/movies", verifyName, createMovie);

app.patch("/movies/:id", verifyId, verifyName, updateMovie);

app.delete("/movies/:id", verifyId, deleteMovie);


const PORT: number = Number(process.env.PORT) || 3000;
const runningMsg = `Server running on http://localhost:${PORT}`;
app.listen(PORT, async () => {
    await startDatabase();
    console.log(runningMsg);
});