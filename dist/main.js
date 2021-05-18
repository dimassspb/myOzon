(()=>{"use strict";function t(){const t=document.querySelectorAll(".goods .card"),e=document.querySelector(".filter-check_checkbox"),c=document.getElementById("min"),n=document.getElementById("max"),o=document.querySelector(".catalog-list li.active");t.forEach((t=>{const r=t.querySelector(".card-price"),l=parseFloat(r.textContent),a=t.querySelector(".card-sale");t.parentNode.style.display="",(c.value&&l<c.value||n.value&&l>n.value||e.checked&&!a||o&&t.dataset.category!==o.textContent)&&(t.parentNode.style.display="none")}))}!async function(){(await function(){const t=document.querySelector(".goods");return fetch("../db/db.json").then((t=>{if(t.ok)return t.json();throw new Error("Данные не получены, ошибка: "+t.status)})).then((t=>t)).catch((e=>{console.warn(e),t.innerHTML='<div style="color:red; font-size:30px">Упс... Что-то пошло не так ...</div>'}))}()).goods.forEach((t=>{const e=document.querySelector(".goods"),c=document.createElement("div");c.className="col-12 col-md-6 col-lg-4 col-xl-3",c.innerHTML=`\n\t\t\t\t\t\t\t\t<div class="card" data-category=${t.category}>\n                ${t.sale?'<div class="card-sale">🔥Hot Sale🔥</div>':""}\n\t\t\t\t\t\t\t\t\t<div class="card-img-wrapper">\n\t\t\t\t\t\t\t\t\t\t<span class="card-img-top"\n\t\t\t\t\t\t\t\t\t\t\tstyle="background-image: url(${t.img})"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class="card-body justify-content-between">\n\t\t\t\t\t\t\t\t\t\t<div class="card-price" style="${t.sale?"color:red":""}">${t.price} ₽</div>\n\t\t\t\t\t\t\t\t\t\t<h5 class="card-title">${t.title}</h5>\n\t\t\t\t\t\t\t\t\t\t<button class="btn btn-primary">В корзину</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n    `,e.appendChild(c)})),function(){const e=document.querySelectorAll(".goods .card"),c=document.querySelector(".catalog-list"),n=document.querySelector(".catalog-button"),o=document.querySelector(".catalog"),r=document.querySelector(".filter-title h5"),l=new Set;e.forEach((t=>{l.add(t.dataset.category)})),l.forEach((t=>{const e=document.createElement("li");e.textContent=t,c.appendChild(e)}));const a=c.querySelectorAll("li");n.addEventListener("click",(e=>{o.style.display?o.style.display="":o.style.display="block","LI"===e.target.tagName&&(a.forEach((t=>{t===e.target?t.classList.add("active"):t.classList.remove("active")})),r.textContent=e.target.textContent,t())}))}(),function(){const t=document.querySelector(".filter-check_checkbox"),e=document.querySelector(".filter-check_checkmark");t.addEventListener("change",(function(){this.checked?e.classList.add("checked"):e.classList.remove("checked")}))}(),function(){const t=document.getElementById("cart"),e=document.querySelector(".cart"),c=document.querySelector(".cart-close");t.addEventListener("click",(()=>{e.style.display="flex",document.body.style.overflow="hidden",c.addEventListener("click",(()=>{e.style.display="none",document.body.style.overflow=""}))}))}(),function(){const t=document.querySelectorAll(".goods .card"),e=document.querySelector(".cart-wrapper"),c=document.getElementById("cart-empty"),n=document.querySelector(".counter");t.forEach((t=>{t.querySelector(".btn").addEventListener("click",(()=>{const c=t.cloneNode(!0);e.appendChild(c),o();const n=c.querySelector(".btn");n.textContent="Удалить",n.addEventListener("click",(()=>{c.remove(),o()}))}))}));const o=()=>{const t=e.querySelectorAll(".card"),o=e.querySelectorAll(".card-price"),r=document.querySelector(".cart-total span");n.textContent=t.length;let l=0;o.forEach((t=>{let e=parseFloat(t.textContent);l+=e})),r.textContent=l,0!==t.length?c.remove():e.appendChild(c)}}(),function(){const e=document.querySelectorAll(".goods .card"),c=document.querySelector(".filter-check_checkbox"),n=document.getElementById("min"),o=document.getElementById("max"),r=document.querySelector(".search-wrapper_input"),l=document.querySelector(".search-btn");c.addEventListener("click",t),n.addEventListener("change",t),o.addEventListener("change",t),l.addEventListener("click",(()=>{const t=new RegExp(r.value.trim(),"i");e.forEach((e=>{const c=e.querySelector(".card-title");t.test(c.textContent)?e.parentNode.style.display="":e.parentNode.style.display="none"})),r.value=""}))}()}()})();