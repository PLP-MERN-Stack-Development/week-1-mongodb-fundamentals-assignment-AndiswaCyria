const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://andiswacyriam:Thisis2025!@plp.bjw4seu.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db("plp_bookstore");
    const books = db.collection("books");

    // --- Basic Queries ---

    // 1. Find all books in a specific genre
    const fictionBooks = await books.find({ genre: "Fiction" }).toArray();
    console.log("Fiction books:", fictionBooks);

    // 2. Find books published after a certain year
    const recentBooks = await books.find({ published_year: { $gt: 2015 } }).toArray();
    console.log("Books published after 2015:", recentBooks);

    // 3. Find books by a specific author
    const authorBooks = await books.find({ author: "Chinua Achebe" }).toArray();
    console.log("Books by Chinua Achebe:", authorBooks);

    // 4. Update the price of a specific book
    const updatePrice = await books.updateOne(
      { title: "Things Fall Apart" },
      { $set: { price: 250 } }
    );
    console.log("Price update result:", updatePrice);

    // 5. Delete a book by its title
    const deleteBook = await books.deleteOne({ title: "Temporary Book" });
    console.log("Delete result:", deleteBook);

    // --- Advanced Queries ---

    // 6. Books that are in stock and published after 2010
    const availableRecentBooks = await books.find({
      in_stock: true,
      published_year: { $gt: 2010 }
    }).toArray();
    console.log("In stock and published after 2010:", availableRecentBooks);

    // 7. Projection: only return title, author, price
    const projectedBooks = await books.find({}, {
      projection: { title: 1, author: 1, price: 1, _id: 0 }
    }).toArray();
    console.log("Projection (title, author, price):", projectedBooks);

    // 8. Sort by price ascending
    const priceAsc = await books.find().sort({ price: 1 }).toArray();
    console.log("Books sorted by price (asc):", priceAsc);

    // 9. Sort by price descending
    const priceDesc = await books.find().sort({ price: -1 }).toArray();
    console.log("Books sorted by price (desc):", priceDesc);

    // 10. Pagination: limit 5, skip 5 (page 2)
    const pageTwo = await books.find().skip(5).limit(5).toArray();
    console.log("Books page 2 (5 per page):", pageTwo);

    // --- Aggregation Pipelines ---

    // 11. Average price of books by genre
    const avgPriceByGenre = await books.aggregate([
      { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
    ]).toArray();
    console.log("Average price by genre:", avgPriceByGenre);

    // 12. Author with most books
    const topAuthor = await books.aggregate([
      { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
      { $sort: { totalBooks: -1 } },
      { $limit: 1 }
    ]).toArray();
    console.log("Author with most books:", topAuthor);

    // 13. Group books by publication decade
    const booksByDecade = await books.aggregate([
      {
        $group: {
          _id: {
            $concat: [
              { $toString: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] } },
              "s"
            ]
          },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]).toArray();
    console.log("Books grouped by decade:", booksByDecade);

    // --- Indexing ---

    // 14. Create index on title
    const titleIndex = await books.createIndex({ title: 1 });
    console.log("Index created on title:", titleIndex);

    // 15. Create compound index on author and published_year
    const compoundIndex = await books.createIndex({ author: 1, published_year: -1 });
    console.log("Compound index created on author and published_year:", compoundIndex);

    // 16. Explain query with and without index
    const explain = await books.find({ title: "Things Fall Apart" }).explain("executionStats");
    console.log("Query explain:", JSON.stringify(explain.executionStats, null, 2));

  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

run();
