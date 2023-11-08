const express = require("express");

const bookController = require("../../controllers/bookController");

const router = express.Router();

router.get("/", bookController.getAllBooks);

router.get("/", bookController.getAllBooks);

router.get("/:bookId", bookController.getOneBook);

router.post("/", bookController.createNewBook);

router.delete("/:bookId", bookController.deleteOneBook);

module.exports = router;
