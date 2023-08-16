document.addEventListener('DOMContentLoaded', () => {
  let allBooks = [
    { title: '', author: '' },
    { title: '', author: '' }];

  allBooks = JSON.parse(localStorage.getItem('allBooks')) || [];

  const $books = document.querySelector('.showLib');

  function showBooks() {
    $books.innerHTML = '';
    allBooks.forEach((book) => {
      const $numofBook = document.createElement('div');
      const $title = document.createElement('h5');
      const $author = document.createElement('h5');
      const $delete = document.createElement('button');
      const $division = document.createElement('hr');

      $numofBook.classList.add('cont-book');
      $title.classList.add('title');
      $author.classList.add('author');
      $delete.classList.add('delete');

      $title.innerText = book.title;
      $author.textContent = book.author;
      $delete.innerHTML = 'Delete';
      $delete.setAttribute('id', 'delete');

      $numofBook.appendChild($title);
      $numofBook.appendChild($author);
      $numofBook.appendChild($delete);
      $numofBook.appendChild($division);
      $books.appendChild($numofBook);
    });
  }

  function update() {
    localStorage.setItem('allBooks', JSON.stringify(allBooks));
  }

  class MyBook {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }

  function ToallBooks() {
    const $recTitulo = document.querySelector('#title');
    const $recAutor = document.querySelector('#author');

    const myBook = new MyBook($recTitulo.value, $recAutor.value);
    allBooks.push(myBook);
    update();
    showBooks();
  }

  function myEmptyForm() {
    const $form = document.querySelector('.Form');
    $form.reset();
  }

  const $form = document.querySelector('.Form');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    ToallBooks();
    myEmptyForm();
  });

  function delMyBook(index) {
    allBooks.splice(index, 1);
    update();
    showBooks();
  }

  $books.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
      const myInd = Array
        .from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
      delMyBook(myInd);
    }
  });
  showBooks();
});