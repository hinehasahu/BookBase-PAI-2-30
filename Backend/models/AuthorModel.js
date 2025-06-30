import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: String,
  country: String,
  birthYear: Number,
});

export const AuthorModel = mongoose.model("Author", authorSchema);
