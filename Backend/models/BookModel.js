import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  genre: String,
  publishedYear: Number,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
});

export const BookModel = mongoose.model("Book", bookSchema);
