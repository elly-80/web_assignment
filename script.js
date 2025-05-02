function addToCart() {
  localStorage.setItem("cartTotal", 20); // Static for demo
  alert("Added to cart!");
}

window.onload = function () {
  const totalEl = document.getElementById("total");
  if (totalEl) {
    const total = localStorage.getItem("cartTotal") || 0;
    totalEl.innerText = total;
  }
};
