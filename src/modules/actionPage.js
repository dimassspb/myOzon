import { filter } from './filter';

export function actionPage() {
  const cards = document.querySelectorAll('.goods .card');
  const discountCheckbox = document.querySelector('.filter-check_checkbox');
  const min = document.getElementById('min');
  const max = document.getElementById('max');
  const search = document.querySelector('.search-wrapper_input');
  const searchBtn = document.querySelector('.search-btn');

  discountCheckbox.addEventListener('click', filter);

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
