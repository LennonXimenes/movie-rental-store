import express, { Application, json } from "express";
import { read } from "./logic";

const app: Application = express();
app.use(json());

app.get("/", read);

const PORT = 3000;
const runningMsg = `Server running on http://localhost:${PORT}`;
app.listen(PORT, () => {
    console.log(runningMsg)
});