import express from 'express'
import {getAllBooks, createBook, deleteBook, updateBook} from '../controllers/BookController.js'
import { authMiddleware } from '../middleware/authMiddleware.js'
import { checkRole } from '../middleware/roleMiddleware.js'

const bookRouter = express.Router()
bookRouter.get("/", getAllBooks)
bookRouter.post("/", authMiddleware, checkRole(["admin", "user"]), createBook)
bookRouter.delete("/:id", deleteBook)
bookRouter.put("/:id", authMiddleware, checkRole(["admin"]), updateBook)

export default bookRouter