# MongoDB Fundamentals Assignment

This assignment demonstrates my understanding of MongoDB basics, including database setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## 📁 Project Structure

week-1-mongodb-fundamentals-assignment-AndiswaCyria/
├── insert_books.js # Provided script (used as reference)
├── queries.js # Contains all MongoDB queries
├── screenshots/ # Folder for MongoDB Compass screenshots
│ ├── mongodb_books_screenshot.png
│ ├── average_price_by_genre.png
│ ├── top_author.png
│ └── books_by_decade.png
├── README.md # This file
└── Week1-Assignment.md # Provided assignment file


---

## ✅ Setup Instructions

### MongoDB Setup

- I used **MongoDB Atlas** with the following connection string:
mongodb+srv://andiswacyriam:Thisis2025!@plp.bjw4seu.mongodb.net/


- My database is called: `plp_bookstore`
- My main collection is: `books`

### Tools Used

- [MongoDB Compass](https://www.mongodb.com/products/compass) for visual exploration and data manipulation.
- [VS Code](https://code.visualstudio.com/) for editing query scripts.

---

## 📚 Data Inserted

I inserted **10 book documents** into the `books` collection using **MongoDB Compass**, each with the following fields:

- `title` (string)
- `author` (string)
- `genre` (string)
- `published_year` (number)
- `price` (number)
- `in_stock` (boolean)
- `pages` (number)
- `publisher` (string)

See screenshot below for proof of data insertion.

---

## 📸 Screenshot of MongoDB Compass

### Books Collection View

- My database is called: `plp_bookstore`
- My main collection is: `books`

---

## 📚 Data Inserted

I inserted **10 book documents** into the `books` collection using **MongoDB Compass**, each with the following fields:

- `title` (string)
- `author` (string)
- `genre` (string)
- `published_year` (number)
- `price` (number)
- `in_stock` (boolean)
- `pages` (number)
- `publisher` (string)

See screenshot below for proof of data insertion.

---

## 📸 Screenshot of MongoDB Compass

### Books Collection View

![Book Collection View](screenshots/mongodb_books_screenshots.png "Collection")

---

## 📜 MongoDB Queries

All queries are in the `queries.js` file, including:

- Finding books by genre
- Books published after a certain year
- Books by a specific author
- Updating book prices
- Deleting books by title
- Filtering by multiple conditions
- Projection, sorting, pagination
- Index creation and performance test

---

## 📊 Aggregation Pipelines

### 1. Average Book Price by Genre

![Average Book](screenshots/Average_price_per_genre.png "Avg")

### 2. Author with the Most Books

![Top Author](screenshots/Author_withthe_most_books.png "Top Author")

### 3. Group Books by Publication Decade

![Books by Decade](screenshots/Grouped_books_by_publication_date.png "Group")

---

## ⚡ Indexing

Indexes created in Compass:

- Single-field index on: `title`
- Compound index on: `author` and `published_year`

The `explain()` method was used to compare performance with and without indexes (results not shown in this file).

---

## 👩‍💻 Author

**Andiswa Cyria**

---

