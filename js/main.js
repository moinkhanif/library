let myLibrary = [];

function Book(author,title,pages,read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

let addBooksToLibrary = (bookName) => {
  myLibrary.push(bookName);
}

let render = () => {

  let displayValues = ''

  for (let index = 0; index < myLibrary.length; index++) {
    let book = myLibrary[index];
    displayValues += `
    <div class="col-md-6">
    <div class="card">
    <div class="card-header">
      ${book.title}
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <p>This book has ${book.pages} pages ${book.read}</p>
        <footer class="blockquote-footer"><cite title="Source Title">${book.author}</cite></footer>
      </blockquote>
      <div data-index="${index}" class="bookRead">
      
      </div>
      <a href=# class="bookDelete" data-index=${index}><i class="fa fa-trash fa-2x" aria-hidden="true"></i></a>
    </div>
  </div>
  </div>
  `

  }

  document.getElementById('books_display').innerHTML = displayValues;
  let bookReads = document.querySelectorAll('.bookRead');
  bookReads.forEach((el)=>{
    if(el){
      let index = el.getAttribute('data-index');
      let button = '';
      console.log(typeof myLibrary[index].read)
      if(myLibrary[index].read === 'true'){
        button = `<button type="button" class="btn btn-success">Read</button>`
      }else {
        button = `<button type="button" class="btn btn-danger">Unread</button>`
      }
      el.innerHTML = button;
     
    }
  })
  let booksDelete = document.querySelectorAll('.bookDelete');
  booksDelete.forEach((el)=>{
    if(el){
      el.addEventListener('click',()=>{
        
        if(confirm("Are you sure you want to delete ")){
          let index = el.getAttribute("data-index");
          myLibrary.splice(index,1);
          render();
          
        }
          
    
        });
      }
  });

//   document.querySelector('.custom-control-input').addEventListener('click', () =>{
//     let index = document.querySelector('.custom-control-input').getAttribute("data-index");
//     if(document.querySelector('.custom-control-input').checked = true){
      
//     }
//   })

}



let bookInput = (author,title,pages,read) => {
  event.preventDefault();
  let newBook = new Book(author,title,pages,read);
  myLibrary.push(newBook);
  renderForm();
  render();
}


let renderForm = () => {

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
  
  `

  document.getElementById('book-form').innerHTML = form

}

// display

document.getElementById('new-book').addEventListener('click', () => {
  renderForm();
})

