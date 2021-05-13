// checkbox

const checkbox = document.querySelector('.filter-check_checkbox');
const checkMark = document.querySelector('.filter-check_checkmark');
checkbox.addEventListener('change', function () {
  if (this.checked) {
    checkMark.classList.add('checked');
  } else {
    checkMark.classList.remove('checked');
  }
});

// end checkbox

// cart

const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const closeBtn = document.querySelector('.cart-close');

btnCart.addEventListener('click', () => {
  modalCart.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  closeBtn.addEventListener('click', () => {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
  });
});

// end cart

// goods

const cards = document.querySelectorAll('.goods .card');
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmpty = document.getElementById('cart-empty');
    
cards.forEach((card) => {
  const btn = card.querySelector('.btn');
  btn.addEventListener('click', () => {
    const cardClone = card.cloneNode(true);
    cartWrapper.appendChild(cardClone);
    cartEmpty.remove();

    showData()
  });
});

const showData = () => {
  const cardsInCart = cartWrapper.querySelectorAll('.card');
  const cartCount = document.querySelector('.counter');
  cartCount.textContent = cardsInCart.length;
};

// end goods
