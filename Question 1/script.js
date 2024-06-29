// Task 1 and 2
let book = {
    title: "Red Rising",
    author: "Pierce Brown",
    pages: 340,
    displayInfo: function () {
        return "Book: " + this.title + " - Author: " +this.author+ " - Pages: "+ this.pages
    }
}


function Book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    
}

console.log(book.displayInfo())

// Task 3

let library = []

function addBooks(title, author, pages) {
    let newbook = new Book (title, author, pages)
    library.push(newbook);
}

function searchByTitles (title) {
    return library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

function serachByAuthors (author) {
    return library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}

addBooks("Golden Son", "Pierce Brown", 95)
addBooks("Morning Star", "Pierce Brown", 150)
addBooks("Red Rising", "Pierce Brown", 60)

console.log(searchByTitles("Golden Son"))
console.log(serachByAuthors("Pierce Brown"))


// Task 4

function filterPages (pageCount) {
    return library.filter(book => book.pages <= pageCount)
    
}

let pageFilter = filterPages(100)

console.log(pageFilter)

function formatBooks () {
    return library.map(book => ({
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`,
        pages: `Pages: ${book.pages}`
    }))
}

let formattedBooks = formatBooks();

console.log(formattedBooks)