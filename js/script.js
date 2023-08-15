const booksWrapper = document.querySelector('.books-wrapper');
const pTilte = document.createElement('p');
const pAuthor = document.createElement('p');
const btnAdd = document.querySelector('.add-btn');
const bookTitleInput = document.querySelector('.title');
const bookAuthorInput = document.querySelector('.author');

let books = [{ bookTitle: 'Lorem ipsum', bookAuthor: 'Testeroo Testyy' }];

const AddBook = () => {
  pTilte.innerText = bookTitleInput.value;
  pAuthor.innerText = bookAuthorInput.value;
  const bookObject = {
    bookTitle: bookTitleInput.value,
    bookAuthor: bookAuthorInput.value,
  };
  books.push(bookObject);
  localStorage.setItem('books', JSON.stringify(books));
  // this.location.reload();
};

btnAdd.addEventListener('click', AddBook);

const bookStore = localStorage.getItem('books');
books = JSON.parse(bookStore);
booksWrapper.innerHTML = `${books
  .map(
    book =>
      `<li class="book-card">
        <p>${book.bremove - btnookTitle}</p>
        <p>${book.bookAuthor}</p>
        <button class="remove-btn">Remove</button>
      </li>
      <hr />`
  )
  .join('')}`;

const removeBtn = document.querySelector('.remove-btn');
