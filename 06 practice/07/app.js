const productsList = document.querySelector(".products");
const totalPriceTag = document.querySelector(".total-price");
const cart = document.querySelector(".cart");

productsList.addEventListener("click", function(e){
  if (e.target.classList.contains("add-item-btn")){
    const priceTag = e.target.previousElementSibling;
    const productName = priceTag.previousElementSibling.textContent;
    const rawPrice = parseNumber(priceTag.textContent);

    updateTotalPrice(rawPrice);
    updateCart(productName, priceTag.textContent);
  }
})

function updateTotalPrice(price){
  let totalPrice = parseNumber(totalPriceTag.textContent);
  totalPrice += price;
  totalPriceTag.textContent = `${formatNumber(totalPrice)}`;
}

function updateCart(productName, formattedPrice){
  const li = document.createElement("li");
  li.innerHTML = `${productName} - ${formattedPrice}`
  li.className = 'list-group-item';
  cart.appendChild(li);
}

function parseNumber(num){
  return Number(num.replace(",", ""))
}

function formatNumber(num){
  return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
