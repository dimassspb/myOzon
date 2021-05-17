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

// end goods

// фильтр акции
function actionPage() {
  const cards = document.querySelectorAll('.goods .card');
  const discountCheckbox = document.querySelector('.filter-check_checkbox');
  const goods = document.querySelector('.goods');
  const min = document.getElementById('min');
  const max = document.getElementById('max');
  const search = document.querySelector('.search-wrapper_input');
  const searchBtn = document.querySelector('.search-btn');

  discountCheckbox.addEventListener('click', filter);

  function filter() {
    cards.forEach((el) => {
      const cardPrice = el.querySelector('.card-price');
      const price = parseFloat(cardPrice.textContent);
      const discount = el.querySelector('.card-sale');

      if (
        (min.value && price < min.value) ||
        (max.value && price > max.value)
      ) {
        el.parentNode.style.display = 'none';
      } else if (discountCheckbox.checked && !discount) {
        el.parentNode.style.display = 'none';
      } else {
        el.parentNode.style.display = '';
      }
    });
  }

  min.addEventListener('change', filter);
  max.addEventListener('change', filter);

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

// конец фильтр акции

// получение данных с сервера

function getData() {
  const goodsWrapper = document.querySelector('.goods');
  return fetch('../db/db.json')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Данные не получены, ошибка: ' + response.status);
      }
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.warn(err);
      goodsWrapper.innerHTML =
        '<div style="color:red; font-size:30px">Упс... Что-то пошло не так ...</div>';
    });
}
// выводим карточки товара
function renderCards(data) {
  data.goods.forEach((good) => {
    const goodsWrapper = document.querySelector('.goods');
    const card = document.createElement('div');
    card.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
    card.innerHTML = `
								<div class="card" data-category=${good.category}>
                ${good.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
									<div class="card-img-wrapper">
										<span class="card-img-top"
											style="background-image: url(${good.img})"></span>
									</div>
									<div class="card-body justify-content-between">
										<div class="card-price" style="${good.sale ? 'color:red' : ''}">${
      good.price
    } ₽</div>
										<h5 class="card-title">${good.title}</h5>
										<button class="btn btn-primary">В корзину</button>
									</div>
								</div>
							
    `;
    goodsWrapper.appendChild(card);
  });
}
//  end получение данных с сервера

// создаем каталог

function renderCatalog() {
  const cards = document.querySelectorAll('.goods .card');
  const catalogList = document.querySelector('.catalog-list');
  const btn = document.querySelector('.catalog-button');
  const catalogWrapper = document.querySelector('.catalog');

  const categories = new Set();
  cards.forEach((card) => {
    categories.add(card.dataset.category);
  });
  categories.forEach((el) => {
    const li = document.createElement('li');
    li.textContent = el;
    catalogList.appendChild(li);
  });
  btn.addEventListener('click', (event) => {
    if (catalogWrapper.style.display) {
      catalogWrapper.style.display = '';
    } else {
      catalogWrapper.style.display = 'block';
    }
    if (event.target.tagName === 'LI') {
      cards.forEach((card) => {
        if(card.dataset.category === event.target.textContent) {
          card.parentNode.style.display = ''
        } else {
          card.parentNode.style.display = 'none'
        }
      })
    }
  });
}

// end создаем каталог

getData().then((data) => {
  renderCards(data);
  toggleCheckBox();
  toggleCart();
  addCart();
  actionPage();
  renderCatalog();
});
