// checkbox
function toggleCheckBox() {
  const checkbox = document.querySelector('.filter-check_checkbox');
  const checkMark = document.querySelector('.filter-check_checkmark');
  checkbox.addEventListener('change', function () {
    if (this.checked) {
      checkMark.classList.add('checked');
    } else {
      checkMark.classList.remove('checked');
    }
  });
}
toggleCheckBox();
// end checkbox

// cart
function toggleCart() {
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
}
toggleCart();
// end cart

// goods
function addCart() {
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
addCart();
// end goods

// фильтр акции
function actionPage() {
  const cards = document.querySelectorAll('.goods .card');
  const checkbox = document.querySelector('.filter-check_checkbox');
  const goods = document.querySelector('.goods');
  const min = document.getElementById('min');
  const max = document.getElementById('max');
  const search = document.querySelector('.search-wrapper_input');
  const searchBtn = document.querySelector('.search-btn');

  checkbox.addEventListener('click', () => {
    cards.forEach((el) => {
      if (checkbox.checked) {
        if (!el.querySelector('.card-sale')) {
          el.parentNode.style.display = 'none';
        }
      } else {
        el.parentNode.style.display = '';
      }
    });
  });
  function filterPrice() {
    cards.forEach((el) => {
      const cardPrice = el.querySelector('.card-price');
      const price = parseFloat(cardPrice.textContent);

      if (
        (min.value && price < min.value) ||
        (max.value && price > max.value)
      ) {
        el.parentNode.style.display = 'none';
        // el.parentNode.remove();
      } else {
        el.parentNode.style.display = '';
        // goods.appendChild(el.parentNode)
      }
    });
  }
  min.addEventListener('change', filterPrice);
  max.addEventListener('change', filterPrice);

  searchBtn.addEventListener('click', () => {
    const searchText = new RegExp(search.value.trim(), 'i'); // 'i' флаг
    cards.forEach((el) => {
      const title = el.querySelector('.card-title');
      if (!searchText.test(title.textContent)) {
        el.parentNode.style.display = 'none';
      } else {
        el.parentNode.style.display = '';
      }
    });
    search.value = '';
  });
}
actionPage();
// конец фильтр акции
