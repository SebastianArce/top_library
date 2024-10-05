const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        infoMessage = `${this.title} by ${this.author}, pages ${this.pages}`;
        if (this.read) {
            infoMessage += ", already read.";
        } else {
            infoMessage += ", not read yet.";
        }
        return infoMessage
    }
}

function addBookToLibrary() {
    // takes users input and creates a new book object
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}

// Add event listener to the form 
document.getElementById("bookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
    console.log(myLibrary);
});

// console.log(myLibrary);