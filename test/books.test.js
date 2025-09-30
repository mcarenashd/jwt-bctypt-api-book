import request from "supertest";
import { app, server } from "../app.js";
import db_connection from "../database/db_connection.js";
import BookModel from "../models/BookModel.js";

describe("test book crud", () => {
  beforeAll(async () => {
    await db_connection.authenticate();
  });
  describe("GET /books", () => {
    let response;

    beforeEach(async () => {
      response = await request(app).get("/books").send();
    });

    test("should return a response with status 200 and type json", async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });

    test("should return array of books", async () => {
      expect(response.body).toBeInstanceOf(Array);
    });
  });

  //POST (create)
  describe("POST /books", () => {
    const newBook = {
      title: "Test",
      writer: "Test",
      book_description: "Test",
    };
    test("should return a response with status 201 and type json", async () => {
      const response = await request(app).post("/books").send(newBook);
      expect(response.status).toBe(201);
      expect(response.headers["content-type"]).toContain("json");
    });
    afterAll(async () => {
      await BookModel.destroy({
        where: {
          title: "Test",
        },
      });
    });
  });
  // MÉTODO DELETE
  describe("DELETE /books", () => {
    let response;
    let createdBook = {};

    beforeEach(async () => {
      createdBook = await BookModel.create({
        title: "test",
        writer: "test",
        book_description: "test",
      });
      response = await request(app).delete(`/books/${createdBook.id}`).send();
    });
    test("should return a response with status 200 and type json", async () => {
      expect(response.status).toBe(200);
      expect(response.headers["content-type"]).toContain("json");
    });
    test("should return a message book deleted successfully and delete the book", async () => {
      expect(response.body.message).toContain(
        "The book has been deleted successfully!"
      );
      const foundBook = await BookModel.findOne({
        where: { id: createdBook.id },
      });
      expect(foundBook).toBeNull(); // certifica que se ha eliminado
    });
  });

  // MÉTODO PUT
  describe("PUT /books/:id", () => {
    let response;
    let createdBook = {};

    beforeEach(async () => {
      createdBook = await BookModel.create({
        title: "test",
        author: "test",
        year: 2022,
      });
    });
    let updatedBook = {
      title: "test updated",
      author: "test updated",
      year: 2025,
    };

    test("should return status 200 and updated book message with type json", async () => {
      response = await request(app)
        .put(`/books/${createdBook.id}`)
        .send(updatedBook);
      expect(response.status).toBe(200);
      expect(response.body.message).toContain(
        "the book is updated successfully"
      );
      expect(response.headers["content-type"]).toContain("json");
    });
    test("should return updated book values", async () => {
      expect(response.body.book.title).toBe(updatedBook.title);
      expect(response.body.book.author).toBe(updatedBook.author);
      expect(response.body.book.year).toBe(updatedBook.year);
    });
    afterAll(async () => {
      await BookModel.destroy({
        where: { id: createdBook.id },
      });
    });
  });
// DESCONEXIÓN AL FINAL
  afterAll(async () => {
    await db_connection.close();
    server.close();
  });
});
