// выводим карточки товара
export function renderCards(data) {
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
