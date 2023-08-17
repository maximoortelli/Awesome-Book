document.addEventListener('DOMContentLoaded', () => {
  const $first = document.querySelector('.first');
  const $showLib = document.querySelector('.showLib');
  const $titulo = document.querySelector('.titleawe');
  const $Addnew = document.querySelector('.addnew');
  const $plus = document.querySelector('.plus');
  const $cont = document.getElementById('Button');
  const $Information = document.querySelector('.Inf');
  const $foot = document.querySelector('.myfoot');

  $first.addEventListener('click', () => {
    $showLib.classList.add('active');
    $titulo.classList.add('active');
    $foot.classList.add('active');
    $plus.classList.remove('active');
    $Information.classList.remove('active');
  });

  $Addnew.addEventListener('click', () => {
    $plus.classList.add('active');
    $foot.classList.add('active');
    $showLib.classList.remove('active');
    $titulo.classList.remove('active');
    $Information.classList.remove('active');
  });

  $cont.addEventListener('click', () => {
    $Information.classList.add('active');
    $foot.classList.add('active');
    $plus.classList.remove('active');
    $showLib.classList.remove('active');
    $titulo.classList.remove('active');
  });
});