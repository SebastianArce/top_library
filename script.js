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
    updateLibraryDisplay();
    document.getElementById("bookForm").reset();
    document.getElementById("modal").style.display = "none";
}

// Update the DOM with the list of books
function updateLibraryDisplay() {
    const libraryContainer = document.getElementById("libraryContainer");
    libraryContainer.innerHTML = ""; // Clear previous content

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");

        const bookInfo = document.createElement("p");
        bookInfo.textContent = book.info();

        const bookRead = document.createElement("button");
        bookRead.textContent = book.read ? "Read" : "Not Read";
        bookRead.classList.add("bookRead");
        bookRead.addEventListener("click", ()=> {
            book.read = !book.read;
            updateLibraryDisplay();
        })

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            updateLibraryDisplay();
        })

        bookCard.appendChild(bookInfo);
        bookCard.appendChild(bookRead);
        bookCard.appendChild(removeButton);
        libraryContainer.appendChild(bookCard);
    })
}


// Add event listener to the form 
document.getElementById("bookForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addBookToLibrary();
    console.log(myLibrary);
});

// Get the modal
const modal = document.getElementById("modal");

// Get the button that opens the modal
const newBookButton = document.getElementById("newBookButton");

// Get the <span> element that closes the modal
const closeButton = document.getElementsByClassName("close-button")[0];

// When the user clicks the button, open the modal
newBookButton.addEventListener("click", function() {
    modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})


// document.getElementById("newBookButton").addEventListener("click", function() { 
//     document.getElementById("bookForm").style.display = "block";
// });
