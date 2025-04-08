const library = []; 
let running = true;
   
function menu() {
    while (running) {
        const message = parseFloat(
            prompt(
                "Select a choice\n 1.) Add a book\n 2.) List Books\n 3.) Mark book as Read\n 4.) Exit\n"
            )
        );

        switch (message) {
            case 1:
                addBook();
                break;
            case 2:
                listBook();
                break;
            case 3:
                const title = prompt("Enter the title of the book to mark as read:");
                markAsRead(title);
                break;
            case 4:
                running = false;
                alert("See you later!")
                break
        default:
                alert("Invalid option.")
        }
    }
}

function addBook() {
    
    const title = prompt("Title of the book");
    const author = prompt("Author of the book");
    const isReadInput = prompt("is Read? (y/n)").toLowerCase();
    const isRead = isReadInput === "y";
    
    const newBook = {
        title: title,
        author: author,
        isRead: isRead,
    };


    library.push(newBook);
    alert("Book Added!");
}

function markAsRead(title) {
    const book = library.find(book => book.title.toLowerCase() === title.toLowerCase());

}

function listBook() {
    if (library.lenght === 0) {
        alert("No books added yet");
    } else {
        console.log("Your books:")
        for (let book of library) {
            console.log(
                `Title: ${book.title}, Author: ${book.author}, Read: ${book.isRead ? "Yes" : "No"}`
            );
        }
    }
       
}

menu();

/*
Instructions: 

Create a small app to track books you’ve read or want to read (If you are not in to books, feel free to change it to movies). Use prompt and alert to simulate the menu. 

You will: 

Use objects to represent books 

Store multiple books in an array 

Write functions to add, list and update books 

Requirements: 

A library array to store all book objects 

Each book should have: 

Title 

Author 

isRead 

Implement these functions: 

addBook() – asks for details and adds a new book object to the library 

listBooks() – display a list of all books (console.log works fine here) 

markAsRead(title) – finds a book by title and sets isRead to true 

 

I have created some starting code for you here:  */