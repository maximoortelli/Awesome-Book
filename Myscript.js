class TheLib {
  constructor() {
    this.manybooks = JSON.parse(localStorage.getItem('TheLib')) || [];
  }

  plus(title, author) {
    const thenewBook = { title, author };
    this.manybooks.push(thenewBook);
    this.myupdate();
    this.showMyBooks();
  }

  erase(i) {
    this.manybooks.splice(i, 1);
    this.myupdate();
    this.showMyBooks();
  }

  myupdate() {
    localStorage.setItem('TheLib', JSON.stringify(this.manybooks));
  }

  showMyBooks() {
    const $differentbooks = document.querySelector('.showLib');
    $differentbooks.innerHTML = '';

    this.manybooks.forEach((thebook, i) => {
      const $multipleBooks = document.createElement('div');
      const $title = document.createElement('h6');
      const $X = document.createElement('h6');
      const $author = document.createElement('h6');
      const $erase = document.createElement('button');
      $multipleBooks.classList.add('multiplybooks');
      $title.classList.add('myTitle');
      $X.classList.add('x');
      $author.classList.add('myAut');
      $erase.classList.add('erase');
      $title.innerText = `"${thebook.title}"`;
      $author.textContent = thebook.author;
      $X.textContent = 'by';
      $erase.innerHTML = 'Remove';
      $multipleBooks.appendChild($title);
      $multipleBooks.appendChild($X);
      $multipleBooks.appendChild($author);
      $multipleBooks.appendChild($erase);
      $erase.addEventListener('click', () => this.erase(i));

      $differentbooks.appendChild($multipleBooks);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const myLibrary = new TheLib();

  function totalEmpty() {
    const $myform = document.querySelector('.Formulary');
    $myform.reset();
  }

  function plusTheLib() {
    const $recTitle = document.querySelector('#title');
    const $recAuthor = document.querySelector('#autor');
    myLibrary.plus($recTitle.value, $recAuthor.value);
    totalEmpty();
  }

  const $myform = document.querySelector('.Formulary');
  $myform.addEventListener('submit', (e) => {
    e.preventDefault();
    plusTheLib();
  });

  const $differentbooks = document.querySelector('.showLib');
  $differentbooks.addEventListener('click', (event) => {
    if (event.target.classList.contains('erase')) {
      const mybookU = Array
        .from(event.target.parentNode.parentNode.children).iOf(event.target.parentNode);
      myLibrary.erase(mybookU);
    }
  });

  myLibrary.showMyBooks();
});