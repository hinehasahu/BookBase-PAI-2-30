import { AuthorModel } from "../models/AuthorModel.js";
import { BookModel } from "../models/BookModel.js";

export const addAuthor = async (req, res) => {
  try {
    let author = await AuthorModel.create(req.body);
    res.status(201).json({ message: "Author added.", author });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};

export const getAuthor = async (req, res) => {
  try {
    let authors = await AuthorModel.find();
    res.status(200).json({ message: "Authors list.", authors });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};

export const getAuthorwithBooks = async (req, res) => {
  const { id } = req.params;
  try {
    let author = await AuthorModel.findById(id);
    if (!author) return res.status(404).json({ message: "No author found." });
    let book = await BookModel.find({ author: id }).populate("author");
    // let books = await Book
    res.status(200).json({ message: "Author by id", book });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};

export const deleteAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    let author = await AuthorModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Author deleted.", author });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log(error);
  }
};
