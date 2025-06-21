# Project Setup and Technologies

- Node
- Mongoose
- Mongodb
- ts-node-dev
- typescript

# Featchers:

✅ User can be Create New Book
✅ User can be Delete existing Book
✅ User can be Get single Book
✅ User can be Update Book
✅ Borrower can be Borrow Book based on Stock
✅ Borrower can be Get Summary of total Book Borrowed

# API

================================= 🔗🔗 ==============================

## Book's API

    🔗 Get All Books : http://localhost:3000/api/books
    🔗 Create New Book : http://localhost:3000/api/books
    🔗 Delete Book : http://localhost:3000/api/books/6856348d9392c344fdf2524b
    🔗 Get Single Book : http://localhost:3000/api/books/6856348d9392c344fdf2524b
    🔗 Update Book : http://localhost:3000/api/books/6856348d9392c344fdf2524b

📒 Here 6856348d9392c344fdf2524b is a book id wichone would be change based on inserted id.
🧑‍💻 SAMPLE JSON :

{
"title": "How To Talk Any One",
"author": "Stephen Hawking",
"genre": "BIOGRAPHY",
"isbn": "9780553380155",
"description": "An overview of cosmology and black holes.",
"copies": -30,
"available": true
}

## Borrower's API

    🔗 Borrow Book : http://localhost:3000/api/borrow
    🔗 Get Book Summary : http://localhost:3000/api/borrow

🧑‍💻 SAMPLE JSON :

{
"book": "6856348d9392c344fdf2524b",
"quantity": 3,
"dueDate": "2025-07-18T00:00:00.000Z"
}
