import BookModel from "../models/BookModel.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await BookModel.findAll();
    res.status(200).json(books);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const books = await BookModel.destroy({ where: { id: req.params.id } });
    res
      .status(200)
      .json({ message: "The book has been deleted successfully!" });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateBook = async (request, res) => {
  try {
    const requestUpdated = await BookModel.update(request.body, {
      where: { id: request.params.id },
    });
    if (requestUpdated) {
      res.status(404).json({ message: "book not found" });
      return;
    }
    const updatedBook = await BookModel.findByPk(request.params.id);
    console.log(response.body);
    res.status(200).json({
      message: "the book is updated",
      book: updatedBook,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createBook = async (req, res) => {
  try {
    const id_user = req.user.id
    const bookData = {...req.body, id_user:id_user}
    const newBook = await BookModel.create(bookData);
    res.status(201).json(newBook);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
