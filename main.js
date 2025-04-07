const book = {
    title: "Lord of the Ring", //addBook();
    author: "Tolkien", //addAuthor();
    isRead: true,
}

const listBooks = []; 

function addBook() {
    listBooks.push({
        title: prompt("Title of the book"),
        author: prompt("Author of the book"),
        isRead: prompt("is Read? (y/n)"),
    })
}

function listBook();

function markAsRead(title) {
    book.isRead(true); 
}
   


function atm() {
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
                alert("Invaliud choice.")
        }
    }
}



/* create an array that has objects in it? 

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