import { products as prods } from "./js/products-obj.js"

function createProductGrid(products) {
  let productContainer = document.getElementById("productContainer");
  let productGrid = document.createElement("div");
  productGrid.classList.add("products");
  for (let prod in prods) {
    let product = prods[prod] 
    let productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
      <h2>${product.name}</h2>
      <div class="product-image" id="${prod}Img"></div>
      <span class="price">${product.price} €</span>
      <button class="add-to-cart-btn" data-product-id="${product.id}">Add to Cart</button>
    `;
    productGrid.appendChild(productDiv);
  };
  productContainer.appendChild(productGrid);
}

createProductGrid()

let currentUser = localStorage.getItem("currentUser");

if(currentUser) {
  
  let buttonsDiv = document.getElementById('signupBtns')
  buttonsDiv.classList.add('hidden')
  
  let welcomeMessage = document.createElement("div");
  welcomeMessage.innerHTML = "Welcome, " + currentUser + '!';
  welcomeMessage.classList.add("welcome-message");
  welcomeMessage.style.marginTop = 10 + 'px'
  
  document.getElementById("products").prepend(welcomeMessage);

  let logout = document.getElementById('logout')

  logout.classList.remove('hidden')

  logout.addEventListener('click', () => {
    localStorage.removeItem('currentUser')
    welcomeMessage.classList.add('hidden')
    buttonsDiv.classList.remove('hidden')
    document.location.href = 'index.html'
  })
}

  for (let product in prods) {
    let imgId = product + "Img";
    document.getElementById(imgId).style.backgroundImage = `url(${prods[product].url})`
  }

  let cart = {}

  for (let product in products) {
    let addToCartBtn = document.getElementById("add" + product);

        addToCartBtn.addEventListener("click", function() {
            addToCart(products[product])
          });

  }
  
  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    
    if(cart[product.id]) {
      cart[product.id].quantity++
    } else {
      cart[product.id] = {...product, quantity: 1}
    }
    localStorage.setItem("cart", JSON.stringify(cart))
  }
  
  let viewCartBtn = document.getElementById("viewCartBtn");
  viewCartBtn.addEventListener("click", function() {
    
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    location.href = "./pages/cart.html"
    
  });

  
  




