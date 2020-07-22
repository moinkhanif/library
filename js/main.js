const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

const render = () => {
  let displayValues = '';

  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < myLibrary.length; index++) {
    const book = myLibrary[index];
    displayValues += `
    <div class="col-md-4 mb-5">
    <div class="card">
    <div class="card-header">
      ${book.title}
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-4">
        <p>This book has ${book.pages} pages </p>
        <footer class="blockquote-footer"><cite title="Source Title">${book.author}</cite></footer>
      </blockquote>
      <div class="d-flex justify-content-between">
        <div data-index="${index}" class="bookRead"></div>
        <a href="#" class="bookDelete" data-index=${index}><i class="fa fa-trash fa-2x" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
  </div>
  `;
  }

  document.getElementById('books_display').innerHTML = displayValues;
  const bookReads = document.querySelectorAll('.bookRead');
  bookReads.forEach((el) => {
    if (el) {
      const index = el.getAttribute('data-index');
      let button = '';
      if (myLibrary[index].read === 'true') {
        button = '<button type="button" class="btn btn-success">Read</button>';
      } else {
        button = '<button type="button" class="btn btn-danger">Unread</button>';
      }
      el.innerHTML = button;
    }
    el.addEventListener('click', () => {
      const index = el.getAttribute('data-index');
      myLibrary[index].read = !myLibrary[index].read;
      let button = '';
      if (myLibrary[index].read === true) {
        button = '<button type="button" class="btn btn-success">Read</button>';
      } else {
        button = '<button type="button" class="btn btn-danger">Unread</button>';
      }
      el.innerHTML = button;
    });
  });
  const booksDelete = document.querySelectorAll('.bookDelete');
  booksDelete.forEach((el) => {
    if (el) {
      el.addEventListener('click', (e) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure you want to delete ')) {
          e.preventDefault();
          const index = el.getAttribute('data-index');
          myLibrary.splice(index, 1);
          render();
        }
      });
    }
  });
};

// eslint-disable-next-line no-unused-vars
const bookInput = (author, title, pages, read) => {
  // eslint-disable-next-line no-restricted-globals
  event.preventDefault();
  const newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook);
  render();
  document.getElementById('form').reset();
};
