// goods
export function addCart() {
  const cards = document.querySelectorAll('.goods .card');
  const cartWrapper = document.querySelector('.cart-wrapper');
  const cartEmpty = document.getElementById('cart-empty');
  const cartCount = document.querySelector('.counter');

  cards.forEach((card) => {
    const btn = card.querySelector('.btn');
    btn.addEventListener('click', () => {
      const cardClone = card.cloneNode(true);
      cartWrapper.appendChild(cardClone);

      showData();

      const removeBtn = cardClone.querySelector('.btn');
      removeBtn.textContent = 'Удалить';
      removeBtn.addEventListener('click', () => {
        cardClone.remove();
        showData();
      });
    });
  });

  const showData = () => {
    const cardsInCart = cartWrapper.querySelectorAll('.card');
    const cardsPrice = cartWrapper.querySelectorAll('.card-price');
    const cardTotal = document.querySelector('.cart-total span');

    cartCount.textContent = cardsInCart.length;

    let sum = 0;
    cardsPrice.forEach((el) => {
      let price = parseFloat(el.textContent);
      sum += price;
    });
    cardTotal.textContent = sum;

    if (cardsInCart.length !== 0) {
      cartEmpty.remove();
    } else {
      cartWrapper.appendChild(cartEmpty);
    }
  };
}

// end goods
