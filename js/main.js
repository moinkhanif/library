let myLibrary = [];

let Book = () => {

}

let addBooksToLibrary = (bookName) => {
  myLibrary.push(bookName);
}

let render = () => {

  let displayValues = ''

  for (let index = 0; index < myLibrary.length; index++) {

    displayValues += `
    <div class="col-md-4">
    <div class="card">
    <div class="card-header">
      ${myLibrary[index]}
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
      </blockquote>
    </div>
  </div>
  </div>
  `
  }

  document.getElementById('books_display').innerHTML = displayValues

}


let renderForm = () => {

  const form = `

  <form>
  <div class="form-group">
    <label for="author">Author</label>
    <input type="text" class="form-control" id="author" aria-describedby="authorname" placeholder="Enter author name">
  </div>
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="booktitle" placeholder="Enter book title">
  </div>

  <div class="form-group">
    <label for="numberofpages">number of pages</label>
    <input type="number" class="form-control" id="numberofpages" aria-describedby="number of pages" placeholder="Enter number of pages">
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="read">
    <label class="form-check-label" for="read">read?</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  
  `

  document.getElementById('books_display').innerHTML = form

}

// display

document.getElementById('new-book').addEventListener('click', () => {


  renderForm()
  // let newBook = prompt("Please enter the book name:");
  // if (newBook != null) {
  //   addBooksToLibrary(newBook);
  //   alert('New Book has been added!');
  //   render();
  // }
})