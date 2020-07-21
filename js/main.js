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
    <div class="col-md-6">
    <div class="card">
    <div class="card-header">
      ${book.title}
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>This book has ${book.pages} pages </p>
        <footer class="blockquote-footer"><cite title="Source Title">${book.author}</cite></footer>
      </blockquote>
      <div data-index="${index}" class="bookRead">
      
      </div>
      <a href=# class="bookDelete" data-index=${index}><i class="fa fa-trash fa-2x mt-4" aria-hidden="true"></i></a>
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
  });
  const booksDelete = document.querySelectorAll('.bookDelete');
  booksDelete.forEach((el) => {
    if (el) {
      el.addEventListener('click', () => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure you want to delete ')) {
          const index = el.getAttribute('data-index');
          myLibrary.splice(index, 1);
          render();
        }
      });
    }
  });
};

const renderForm = () => {
  const form = `

  <form onsubmit='bookInput(this.author.value,this.title.value,this.pages.value,this.read.value);return false'>
  <div class="form-group">
    <label for="author">Author</label>
    <input type="text" class="form-control" name="author" id="author" aria-describedby="authorname" placeholder="Enter author name">
  </div>
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" name="title" id="title" aria-describedby="booktitle" placeholder="Enter book title">
  </div>

  <div class="form-group">
    <label for="numberofpages">number of pages</label>
    <input type="number" class="form-control" name="pages" id="numberofpages" aria-describedby="number of pages" placeholder="Enter number of pages">
  </div>

  <div class="form-check">
  <input type="radio" class="form-check-input" id="read" value='true' name="read">
  <label class="form-check-label" for="read">Read</label>
  </div>

  <div class="form-check">
  <input type="radio" class="form-check-input" id="read" value='false' name="read" checked>
  <label class="form-check-label" for="read">Not Read</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  
  `;
  document.getElementById('book-form').innerHTML = form;
};
// eslint-disable-next-line no-unused-vars
const bookInput = (author, title, pages, read) => {
  // eslint-disable-next-line no-restricted-globals
  event.preventDefault();
  const newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook);
  renderForm();
  render();
};

// display

document.getElementById('new-book').addEventListener('click', () => {
  renderForm();
});
