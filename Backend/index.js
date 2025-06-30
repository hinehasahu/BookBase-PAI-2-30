import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { ConnectToMongoDB } from "./config/db.js";
import { AuthorRouter } from "./routes/authorRoutes.js";
import { BookRouter } from "./routes/bookRoutes.js";
import { AggregateRouter } from "./stats/aggregationRoutes.js";
import morgan from "morgan";

ConnectToMongoDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('combined'))

app.use("/api/authors", AuthorRouter);
app.use("/api/books", BookRouter);
app.use("/api/stats", AggregateRouter);

app.use((req, res) => {
  res.status(404).json({ message: "404 unauthorized." });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
