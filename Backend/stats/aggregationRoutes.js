import express from 'express';
import { BookModel } from '../models/BookModel.js';
import { AuthorModel } from '../models/AuthorModel.js';

export const AggregateRouter = express.Router();

AggregateRouter.get("/books-per-genre", async(req,res)=>{
    try {
        let books = await BookModel.aggregate([
            {
                $group: {
                    _id: "$genre",
                    total: {$sum: 1 }
                }
            }
        ])
        res.status(200).json({message:"Book count per genre.", books})
    } catch (error) {
        res.status(500).json({message:"Something went wrong."})
        console.log(error)
    }
})

AggregateRouter.get("/top-authors", async(req,res)=>{
    try {
        let authors = await AuthorModel.aggregate([
            {
                $lookup: {
                    
                }
            }
        ])
    } catch (error) {
        res.status(500).json({message:"Something went wrong."})
        console.log(error)
    }
})