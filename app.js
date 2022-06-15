// Book Class 

class book{
    constructor(title,author,status){
        this.title = title;
        this.author = author;
        this.status = status;
    }
}

// UI class

class UI{
    static displayBooks () {
        

        books.forEach((book) => {
            UI.addBookToList(book);
        })
    }

    static addBookToList(book){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.status}</td>
            <td> <a href="#" class="btn btn-danger btn-sm delete"> X </a> </td>
        `;

        list.appendChild(row);
    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    // Inserting an alert message on the screen instead of an alert message
    static showAlert(message,className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);
        // vanish in 3s

        setTimeout( () => document.querySelector('.alert').remove(), 2500);

    }

    static clearFields(){
        document.querySelector('#title').value='';
        document.querySelector('#author').value='';
        document.querySelector('#status').value='';
    }
}

// storage class : Handles the storage

class Store{
    static getbooks(){


    }

    static addBook(Book){



    }

    static removeBook(status){



    }
}



// Events class : Display book , add book  , remove a book 

document.addEventListener('DOMContentLoaded', UI.displayBooks);
document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const status = document.querySelector('#status').value;

    if(title === '' || author === '' || status === ''){
        UI.showAlert('Please fill in the details ' , 'info')
    }
    else{
        //Instantiate book
        const Book = new book(title,author,status);
        // Add Book to UI
        UI.addBookToList(Book);
        //Success show message
        UI.showAlert('Book added', 'success')
        // Clear Fields
        UI.clearFields();

    }
});


//Remove Book

document.querySelector('#book-list').addEventListener('click', (e) => {
   UI.deleteBook(e.target);
   UI.showAlert('Book Removed', 'danger')
});