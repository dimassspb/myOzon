// фильтр акции

export function filter() {
  const cards = document.querySelectorAll('.goods .card');
  const discountCheckbox = document.querySelector('.filter-check_checkbox');
  const min = document.getElementById('min');
  const max = document.getElementById('max');
  const activeLi = document.querySelector('.catalog-list li.active');

  cards.forEach((el) => {
    const cardPrice = el.querySelector('.card-price');
    const price = parseFloat(cardPrice.textContent);
    const discount = el.querySelector('.card-sale');

    el.parentNode.style.display = '';

    if ((min.value && price < min.value) || (max.value && price > max.value)) {
      el.parentNode.style.display = 'none';
    } else if (discountCheckbox.checked && !discount) {
      el.parentNode.style.display = 'none';
    } else if (activeLi) {
      if (el.dataset.category !== activeLi.textContent) {
        el.parentNode.style.display = 'none';
      }
    }
  });
}
// конец фильтр акции
