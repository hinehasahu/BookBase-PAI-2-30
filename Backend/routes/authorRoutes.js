import express from "express";
import {
  addAuthor,
  deleteAuthor,
  getAuthor,
  getAuthorwithBooks,
} from "../controllers/authorController.js";

export const AuthorRouter = express.Router();

AuthorRouter.post("/add", addAuthor);

AuthorRouter.get("/", getAuthor);

AuthorRouter.get("/:id", getAuthorwithBooks);

AuthorRouter.delete("/:id", deleteAuthor);
