const addBookBtn = document.querySelector('#add-book-btn');
const addBookForm = document.querySelector('#add-book-form');
const formCloseBtn = document.querySelector('#form-close-btn');

addBookBtn.addEventListener('click', () => {
  addBookForm.style.display = 'block';
});

formCloseBtn.addEventListener('click', () => {
  addBookForm.style.display = 'none';
});

const myLibrary = ['HARRY POTTER', 'Sky rim', 'Wizard of Oz'];

function Book() {

}

function addBookToLibrary() {
  myLibrary.forEach((value, index) => console.log(value));
}

addBookToLibrary();
