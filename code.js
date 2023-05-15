/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
const addBookBtn = document.querySelector('#add-book-btn');
const addBookForm = document.querySelector('#add-book-form');
const formCloseBtn = document.querySelector('#form-close-btn');

addBookBtn.addEventListener('click', () => {
  addBookForm.style.display = 'block';
});

formCloseBtn.addEventListener('click', () => {
  addBookForm.style.display = 'none';
});

// book constructor
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggleRead() {
    this.read = !this.read;
  }
}

// array
const myLibrary = [];

// Create book
function createBook() {
  const bookContainer = document.querySelector('#book-container');

  bookContainer.textContent = '';

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const card = document.createElement('div');

    // change the button class and text based on the read status
    const readClass = book.read ? 'read' : 'not-read';
    const readText = book.read ? 'Read' : 'Not Read';

    card.innerHTML = `
    <div class="card">
    <h2>${book.title}</h2>
    <p><i>by ${book.author}</i></p>
    <p>${book.pages} pages</p>
    <div class="card-buttons">
        <button class="check-read ${readClass}" onclick="toggleRead(${i})">${readText}</button>
        <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
    </div>
</div>`;

    bookContainer.appendChild(card);
  }
}

// remove book function
function removeBook(index) {
  myLibrary.splice(index, 1);
  createBook();
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  createBook();
}

// collect user input and add to array
function addBookToLibrary() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;

  const addBook = new Book(title, author, pages, read);
  myLibrary.push(addBook);

  createBook();
}

addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addBookToLibrary();
  addBookForm.style.display = 'none';
});
