const first = document.getElementById('first');
const second = document.querySelector('.second');

first.addEventListener('click', () => {
  first.classList.toggle('active');
});
second.addEventListener('click', () => {
  second.classList.toggle('active');
});
const firstImg = document.getElementsByClassName('first-img')[0];
const btns = document.querySelectorAll('.btn');
btns[0].addEventListener('click', () => {
  if (document.getElementsByClassName('second-img')[0]) {
    if (
      document.getElementsByClassName('second-img')[0].style.display === 'none'
    ) {
      document.getElementsByClassName('second-img')[0].style.display = 'inline';
      btns[3].disabled = false;
      btns[0].disabled = true;
      return;
    } else {
      return;
    }
  }
  const link = document.createElement('a');
  link.href =
    'https://uk.wikipedia.org/wiki/%D0%A0%D1%96%D0%BC%D1%96%D0%BD%D1%96';
  link.className = 'second-img';
  const img = document.createElement('img');
  img.src =
    'https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/Rimini-3_0.jpg';
  img.style.width = '25%';
  img.className = 'second__img';
  link.appendChild(img);
  firstImg.after(link);
  btns[0].disabled = true;
});
btns[1].addEventListener('click', () => {
  document.getElementsByClassName('second__img')[0].style.width = '40%';
});
btns[2].addEventListener('click', () => {
  document.getElementsByClassName('second__img')[0].style.width = '10%';
});
btns[3].addEventListener('click', () => {
  document.getElementsByClassName('second-img')[0].style.display = 'none';
  btns[3].disabled = true;
  btns[0].disabled = false;
});
