import express from "express";
import {
  addBook,
  deleteBook,
  getBookbyGenre,
  getBooks,
} from "../controllers/bookController.js";

export const BookRouter = express.Router();

BookRouter.post("/add", addBook);

BookRouter.get("/", getBooks);

BookRouter.get("/:genre", getBookbyGenre);

BookRouter.delete("/:id", deleteBook);
