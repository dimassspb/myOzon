// создаем каталог
import { filter } from './filter';

export function renderCatalog() {
  const cards = document.querySelectorAll('.goods .card');
  const catalogList = document.querySelector('.catalog-list');
  const btn = document.querySelector('.catalog-button');
  const catalogWrapper = document.querySelector('.catalog');
  const filterTitle = document.querySelector('.filter-title h5');

  const categories = new Set();
  cards.forEach((card) => {
    categories.add(card.dataset.category);
  });
  categories.forEach((el) => {
    const li = document.createElement('li');
    li.textContent = el;
    catalogList.appendChild(li);
  });

  const allLi = catalogList.querySelectorAll('li');

  btn.addEventListener('click', (event) => {
    if (catalogWrapper.style.display) {
      catalogWrapper.style.display = '';
    } else {
      catalogWrapper.style.display = 'block';
    }
    if (event.target.tagName === 'LI') {
      allLi.forEach((el) => {
        if (el === event.target) {
          el.classList.add('active');
        } else {
          el.classList.remove('active');
        }
      });
      filterTitle.textContent = event.target.textContent;
      filter();
    }
  });
}

// end создаем каталог
