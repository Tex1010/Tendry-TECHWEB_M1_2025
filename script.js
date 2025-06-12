const products = [
  {
    image: "Img/Screenshot 2025-06-07 1053465.png", // Adidas
    name: "Adidas",
    subtitle: "DAILY 3.0 SHOES",
    price: 98.99
  },
  {
    image: "Img/Screenshot 2025-06-07 1051593.png", // Nike Air Force Premium 1
    name: "Nike",
    subtitle: "Nike Air Force Premium",
    price: 200.00
  },
  {
    image: "Img/Screenshot 2025-06-07 1053314.png", // Nike Air Force Premium 2
    name: "Nike",
    subtitle: "Nike Air Force Premium",
    price: 98.23
  },
  {
    image: "Img/Screenshot 2025-06-07 1050352.png", // Sneakers
    name: "Sneakers",
    subtitle: "Sneakers edition",
    price: 775.00
  }
];

let currentImageIndex = 0;

function updateProductView() {
  const product = products[currentImageIndex];
  document.getElementById("productImage").src = product.image;
  document.querySelector("h2").textContent = product.name;
  document.querySelector(".subtitle").textContent = product.subtitle;
  document.getElementById("priceDisplay").textContent = `$${product.price.toFixed(2)}`;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % products.length;
  updateProductView();
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + products.length) % products.length;
  updateProductView();
}

window.onload = updateProductView;

let quantity = 1;

function increaseQuantity() {
  quantity++;
  document.getElementById("qty").textContent = quantity;
}

function decreaseQuantity() {
  if (quantity > 1) {
    quantity--;
    document.getElementById("qty").textContent = quantity;
  }
}

function addToCart() {
  const qty = quantity;
  const product = products[currentImageIndex];

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Vérifie si le produit est déjà dans le panier
  const existing = cart.find(item => item.image === product.image);
  if (existing) {
    existing.quantity += qty;
  } else {
    cart.push({
      ...product,
      quantity: qty
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`Vous avez ajouté ${qty} x ${product.name} à $${product.price} au panier.`);
}

document.querySelector(".add-to-cart").addEventListener("click", addToCart);

// Rediriger vers le panier
document.querySelector(".cart-btn").addEventListener("click", () => {
  window.location.href = "cart.html";
});
