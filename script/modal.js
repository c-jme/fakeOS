const iconWrap = document.querySelectorAll('.iconWrap');
const modal = document.querySelector('.modal');
const modalclose = document.querySelector('.modal-close');
const modalTitle = document.querySelector('.modal__title');
const modalImage = document.querySelector('.modal__image');

//modal create
iconWrap.forEach(iconWrap => {
  iconWrap.addEventListener('click', () => {
    const image = iconWrap.querySelector('img').src;
    image.src = "https://loremflickr.com/640/360";
    const iconText = iconWrap.querySelector('p').textContent;
    modal.style.display = 'flex';
    modalTitle.textContent = iconText;
    modalImage.src = image.src = "https://loremflickr.com/640/360";
  });
});

//modal close
const modalClose = document.querySelector('.modal-close');
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});