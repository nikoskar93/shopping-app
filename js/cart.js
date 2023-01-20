import { products } from "../js/products-obj.js"


let cart = JSON.parse(localStorage.getItem("cart")) || {};

let cartContainer = document.getElementById("cartContainer");

cartContainer.style.marginTop = 50 + 'px'

if(Object.keys(cart).length === 0){
      let productDiv = document.createElement("div");
    
      productDiv.innerHTML = `
      <div class="empty-cart">Your Cart is Empty!</div>
      `
      productDiv.style.fontSize = 1.5 + 'rem'
      cartContainer.appendChild(productDiv)
}

for (let productId in cart) {
  let product = cart[productId];
  let productDiv = document.createElement("div");
  productDiv.className = "product";
  productDiv.innerHTML = `
  <div class="product-info">
        <h2>${product.name}</h2>
        <div class="product-image-cart" id="product1Img" style = "background-image: url(../${product.url})"></div>
        <span class="price">€${product.price}</span>
      </div>
    <div class="product-quantity">
      <label>Quantity:</label>
      <div class="qty">
      <input type="number" min="1" value="${product.quantity}" id="${productId}">
      <button id="updateBtn${productId}">Update</button>
      <button id="removeBtn${productId}">Remove</button>
      </div>  
    </div>
  `;

  function getTotalPrice() {
    let totalPrice = 0;
    for (let productId in cart) {
      totalPrice += cart[productId].price * cart[productId].quantity;
    }
    return totalPrice.toFixed(2);
  }

  

  let totalPriceSpan = document.getElementById("totalPrice");
  
  totalPriceSpan.innerHTML = getTotalPrice();

  cartContainer.appendChild(productDiv);

  let updateBtn = document.getElementById(`updateBtn${productId}`);
  let removeBtn = document.getElementById(`removeBtn${productId}`);
  let quantityInput = document.getElementById(`${productId}`);

  updateBtn.addEventListener("click", function(){
    let quantity = parseInt(quantityInput.value);
    cart[productId].quantity = quantity;
    localStorage.setItem("cart", JSON.stringify(cart));
    totalPriceSpan.innerHTML = getTotalPrice();
    
  });

  removeBtn.addEventListener("click", function(){
    delete cart[productId];
    localStorage.setItem("cart", JSON.stringify(cart));
    cartContainer.removeChild(productDiv)
    totalPriceSpan.innerHTML = getTotalPrice();
    if(Object.keys(cart).length === 0){
        location.reload()
    }
  });
}


