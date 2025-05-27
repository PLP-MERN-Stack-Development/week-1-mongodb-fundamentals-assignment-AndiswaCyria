// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("plp_bookstore");
const { connectDB, client } = require('./dbConnect');

async function insertBooks() {
  try {
    const db = await connectDB();
    const books = db.collection('books');

    const bookDocs = [
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Adventure",
        published_year: 1988,
        price: 15.99,
        in_stock: true,
        pages: 208,
        publisher: "HarperOne"
      },
      {
        title: "Becoming",
        author: "Michelle Obama",
        genre: "Biography",
        published_year: 2018,
        price: 20.5,
        in_stock: true,
        pages: 400,
        publisher: "Crown"
      },
      {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        published_year: 1949,
        price: 12.99,
        in_stock: false,
        pages: 328,
        publisher: "Secker & Warburg"
      },
      {
        title: "Educated",
        author: "Tara Westover",
        genre: "Memoir",
        published_year: 2018,
        price: 18.99,
        in_stock: true,
        pages: 352,
        publisher: "Random House"
      },
      {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        genre: "History",
        published_year: 2011,
        price: 22.0,
        in_stock: true,
        pages: 443,
        publisher: "Harper"
      },
      {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genre: "Thriller",
        published_year: 2019,
        price: 14.99,
        in_stock: false,
        pages: 336,
        publisher: "Celadon Books"
      },
      {
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-help",
        published_year: 2018,
        price: 16.0,
        in_stock: true,
        pages: 320,
        publisher: "Penguin"
      },
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        published_year: 1937,
        price: 10.99,
        in_stock: true,
        pages: 310,
        publisher: "George Allen & Unwin"
      },
      {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Fiction",
        published_year: 1951,
        price: 13.5,
        in_stock: false,
        pages: 277,
        publisher: "Little, Brown and Company"
      },
      {
        title: "The Road",
        author: "Cormac McCarthy",
        genre: "Post-apocalyptic",
        published_year: 2006,
        price: 15.0,
        in_stock: true,
        pages: 287,
        publisher: "Alfred A. Knopf"
      }
    ];

    const result = await books.insertMany(bookDocs);
    console.log(`Inserted ${result.insertedCount} books`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

insertBooks();
