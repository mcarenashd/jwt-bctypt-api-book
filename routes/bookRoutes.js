import express from 'express'
import {getAllBooks, createBook, deleteBook} from '../controllers/BookController.js'
const bookRouter = express.Router()

bookRouter.get("/", getAllBooks)
bookRouter.post("/", createBook)
bookRouter.delete("/:id", deleteBook)
// bookRouter.update("/:id", updateBook)

export default bookRouter