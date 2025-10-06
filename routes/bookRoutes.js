import express from 'express'
import {getAllBooks, createBook, deleteBook, updateBook} from '../controllers/BookController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'

const bookRouter = express.Router()
bookRouter.get("/", getAllBooks)
bookRouter.post("/", authMiddleware, createBook)
bookRouter.delete("/:id", deleteBook)
bookRouter.put("/:id", updateBook)

export default bookRouter