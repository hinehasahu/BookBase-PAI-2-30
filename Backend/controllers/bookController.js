import { BookModel } from "../models/BookModel.js";

export const addBook = async (req, res) => {
  try {
    let book = await BookModel.create(req.body);
    res.status(201).json({ message: "Book added.", book });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};

export const getBooks = async (req, res) => {
  try {
    let books = await BookModel.find();
    res.status(200).json({ message: "Books list.", books });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};

export const getBookbyGenre = async (req, res) => {
  const { genre } = req.params;
  try {
    let books = await BookModel.find({ genre });
    if (!books)
      return res.status(404).json({ message: "No book found by this genre." });
    res.status(200).json({ message: "Book list by genres.", books });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    let book = await BookModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Book deleted.", book });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};
