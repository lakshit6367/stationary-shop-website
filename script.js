let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

function displayCart() {
    let container = document.getElementById("cart-items");
    if (!container) return;

    container.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        let div = document.createElement("div");
        div.textContent = item.name + " - ₹" + item.price;
        container.appendChild(div);
        total += item.price;
    });

    document.getElementById("total").textContent = "Total: ₹" + total;
}