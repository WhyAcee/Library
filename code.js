const addBookBtn = document.querySelector('#add-book-btn');
const addBookForm = document.querySelector('#add-book-form');
const formCloseBtn = document.querySelector('#form-close-btn');

addBookBtn.addEventListener('click', () => {
  addBookForm.style.display = 'block';
});

formCloseBtn.addEventListener('click', () => {
  addBookForm.style.display = 'none';
});

// boilerplate
const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;
  const addBook = new Book(title, author, pages, read);

  myLibrary.push(addBook);
  console.log(myLibrary);
}

addBookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  addBookToLibrary();
  addBookForm.style.display = 'none';
});
