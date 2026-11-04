const express = require("express")
const BookModel = require("../models/book")
const mongoose = require("mongoose")

const routes = express.Router()

//Get All Books
routes.get("/books", async(req, res) => {
   try {
        const books = await BookModel.find()
        res.send(books)
    }catch(err) {
        res.status(500).send({message: err.message || "Some error occurred while retrieving books."})
    }
})

//Add NEW Book
routes.post("/books",async (req, res) => {
    try {
        const book = new BookModel(req.body)
        const savedBook = await book.save()
      res.status(201).send(savedBook)
    }catch(err) {
        res.status(500).send({message: err.message || "Some error occurred while adding new book."})
    }
})

//Update existing Book By Id
routes.put("/book/:bookid", async (req, res) => {
    const bookId = req.params.bookid
    try {
        if (!mongoose.Types.ObjectId.isValid(bookId)) {
            return res.status(404).send({ message: "Book not found" })
        }
        const book = await BookModel.findByIdAndUpdate(bookId, req.body, { new: true })
        if (!book) {
            return res.status(404).send({ message: "Book not found" })
        }
        res.send(book)
    } catch (err) {
        res.status(500).send({message: err.message || "Some error occurred while updating the book."})
    }
})

//Delete Book By ID
routes.delete("/book/:bookid", async (req, res) => {
    const bookId = req.params.bookid
    try {
        if (!mongoose.Types.ObjectId.isValid(bookId)) {
            return res.status(404).send({ message: "Book not found" })
        }
        const book = await BookModel.findByIdAndDelete(bookId)
        if (!book) {
            return res.status(404).send({ message: "Book not found" })
        }
        res.send({ message: "Book deleted successfully" })
    } catch (err) {
        res.status(500).send({message: err.message || "Some error occurred while deleting the book."})
    }
})

//Get Book By ID
routes.get("/book/:bookid", async (req, res) => {
    try {
        const book = await BookModel.findById(req.params.bookid)
        if (!book) {
            return res.status(404).send({ message: "Book not found" })
        }
        res.send(book)
    } catch (err) {
        res.status(500).send({message: err.message || "Some error occurred while retrieving the book."})
    }
})

//Get All Books in sorted order
routes.get("/books/sort", async (req, res) => {
    try {
        const books = await BookModel.find().sort({ publicationYear: 1 })//sort by publication year in ascending order(-1 for descending order)
        res.send(books)
    } catch (err) {
        res.status(500).send({message: err.message || "Some error occurred while retrieving the books."})
    }
})
//Get All Books by published year
routes.get("/books/year/:year", async (req, res) => {
    const year = req.params.year
    try {
        const books = await BookModel.find({ publishedYear: year })
        res.send(books)
    } catch (err) {
        res.status(500).send({message: err.message || "Some error occurred while retrieving the books."})
    }
})

module.exports = routes