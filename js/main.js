document.getElementById('new-book').addEventListener('click', ()=> {
  let newBook = prompt("Please enter the book name:");
  if(newBook != null){
    addBooksToLibrary(newBook);
    alert('New Book has been added!');
  }
})

let myLibrary = [];

let Book = () => {

}
let addBooksToLibrary = (bookName) => {
  myLibrary.push(bookName);
}
