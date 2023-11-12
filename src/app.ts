import express, { Application, json } from "express";
import { createMovie, deleteMovie, readMovies, retriveMovies, updateMovie } from "./logic";
import { startDatabase } from "./database";

const app: Application = express();
app.use(json());

app.get("/movies", readMovies);
app.get("/movies/:id", retriveMovies);

app.post("/movies", createMovie);

app.patch("/movies/:id", updateMovie);

app.delete("/movies/:id", deleteMovie);


const PORT: number = Number(process.env.PORT) || 3000;
const runningMsg = `Server running on http://localhost:${PORT}`;
app.listen(PORT, async () => {
    await startDatabase();
    console.log(runningMsg);
});