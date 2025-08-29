const products = [
    {
        id: 1, 
        name: "Red Elegant Dress", 
        price: 1200, 
        offer: "10% Off", 
        img: "https://n1.sdlcdn.com/imgs/k/x/u/A-TO-Z-CART-Black-SDL998323185-1-c5bb7.jpg"
       /* sizes: ["S", "M", "L", "XL"] */
       
    },
    {
        id: 2, 
        name: "Pink Party Dress", 
        price: 1500, 
        offer: "15% Off", 
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQNRAtgfL9tggsWg4udKF7kMhTUOQE04bDRcnqchSm4zS1MSLC0w7rofLYgtIBsVXNJcYCeIesztUXydZdLi2YzUJ5QbB6YqpBXLYgb_NDgzKUPj_dNUKxh_w&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 3, 
        name: "Black Casual Dress", 
        price: 1800, 
        offer: "5% Off", 
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQaM-Pt0c__12q93Ah_g2KbRMMK8cjvnXDGp7RE4CBxPnJm5636w_4o3qgwNFwTlKVJdPgzOfh0ZlMysAswoA2ZIL1i0IU9jLU8q-Of1Vo&usqp=CAE"
       /* sizes: ["M", "L", "XL"] */
    },
    {
        id: 4, 
        name: "Pink  Dress", 
        price: 1500, 
        offer: "15% Off", 
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRzdlH0-QSlB_mCwXu1zPhIPiPWqM-BKsXAmgirikozvzSV9RSeRcZGlNmb-xy0PDB53mnxZuTFXPUJNNkLJsha_ZcgjGuBOoN8j1VGnjbtBMaYPoDuhdl6HQ&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 5, 
        name: "Red Party Dress", 
        price: 1700, 
        offer: "15% Off", 
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTeWg4VaJU0E1DhY_XwwxLlj0rDSE3Lz82inub2xNeSQFBfFF32vYbbtG1jiQv-3uWXNhwC7alXjdQn42Nsg8fV6LPdhhPaoeiwJZr5SLFy&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 6, 
        name: "White Party Dress", 
        price: 2000, 
        offer: "40% Off", 
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQOA8WChNqU-O6UR8_kDZ42pFQLkNSjx2PWCcQxCrY2XOEcwlQfpBdl9rkoOh5dKQiDe3MsWwRbCdNCYC7L2dQnYMqeScwO6gfkTH9Py1phVYxz4DdQQ2QJRw&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 7, 
        name: "Merune Red Dress", 
        price: 1200, 
        offer: "30% Off", 
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS8hEmug6I7HB0dYexrTPH4Nch_g-WMMXG-gMEQCP7H1r3E7ytzZ4vFzTJKL8K9xvHXy2576w3LC2D8VhzY-ooouSOvlsneXaeoMzZxlSjyJl36t36fWhF09A&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 8, 
        name: "Dark Blue Party Dress", 
        price: 1500, 
        offer: "25% Off", 
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTW7jjiHktydsgYoWjTcpkQ6hnwGUFf8XHe08MgpgsKOMN_OFkI1bezNW5meNhVLd7Giek9o9n6A4IaDGQqGFhnWfdV-9DaUXbxOuMGdE_j&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 9, 
        name: "Light Blue Party Dress", 
        price: 1000, 
        offer: "15% Off", 
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRnoGbkiN3yrjuiWWZjkNffgluSCPHbW0BL6wuZEroVmXv9J0GLqd_jOfReCLrCclxht_tiPzfy42A_3b7nDTuXtvAe09lC6XLiOcC8eA1fG3eN1ZanfUdq&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 10, 
        name: "Light Orange Party Dress", 
        price: 1500, 
        offer: "30% Off", 
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRXUQ1VdBVVgULfSmDDQ60sWAAEmR6HT5HgXxB3TKGY0HBzI7cRE1rc4n91fAL8nDsR424NwJq3txmcPEo7rgD3dPwQNX99nKHsMgcob4fx3dXADvVvMMkbfQ&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 11, 
        name: "Sky Blue Party Dress", 
        price: 2000, 
        offer: "25% Off", 
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ4LNE4kjNXK5x4tgQkD9U0yDuuRVjfdXvMi2mIrLpEcx6BTJjUm65sqLITgUQbCsq8TxuY1xm7w1U1YJ_WD5BKaPRWfwR65okmBXnOfag&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 12, 
        name: "Light Party Dress", 
        price: 1800, 
        offer: "20% Off", 
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRbDH0lrem0I-6_1Rr2vRwGq5_BeuY3qaZl2zCNpAjJNxW6zC2N3sjuQiVRsMmJ9UwYMR8VSPQIcFcDeGre8nOliwpqhaHJNNhFP-zSGZoZGs5bOg-sJwEveQ&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 13, 
        name: "Light White Dress", 
        price: 1300, 
        offer: "10% Off", 
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRtTnUMjQMzWi_rsfbdhOLxjwzaaYKR54cyt9IO7lRyh4riJIBVx9BUZb3pNGqxml7If7kFRMV1KW8u95jQffNIh_dTG3OaK7P9v1PRJQ&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 14, 
        name: "Black Dress", 
        price: 1800, 
        offer: "15% Off", 
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQa7undz8J7Z2jLWr444s4LLK0HAIY_BQShh7SBjyNrXHBe4jak2IGNhac16eRInixqneV0J2TwxLfQ5lZaJJly4phpL3q46LTPsNxc1lg&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 15, 
        name: "Green Party Dress", 
        price: 1500, 
        offer: "25% Off", 
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZgC0XrmeJNjP9ERgzaOSxBQaFQmcq6-H_9DLIkTNM4HaQPHjrIqCQOsYGwOH5d9W4uj1-qR0FvKX1BOSPAwUMVFSypPdFomepXYIjmFo&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 16, 
        name: "Merune Red  Dress", 
        price: 1100, 
        offer: "30% Off", 
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZtHKP4-WN-wTHJZqVpG0xf7yL4weNzmBTbmMTuk7YHMctEIXA9Cqsstf5mGToT-RUP_kWYlXMkBjNeV_Tl-ZFl-z-Twq87VAkXF3bQaZ8ryvvZP4DgBLX&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 17, 
        name: "Light Pink  Dress", 
        price: 1900, 
        offer: "25% Off", 
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQF77UagCRkSqb5qj5s5vkACbODBvvn2UYejfuD0nqKqPbeWwjvEKBWxHFgn2tUXE5J1ZWn1HgXzxjqe4DZYUxbYVe0mNheljuDig-90x5k&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 18, 
        name: "Blue With Red color Dress", 
        price: 1400, 
        offer: "35% Off", 
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTl_rrvgpf65N4cqjgZh34vhVxlPTNL44EOs-1LSr4huL-cr8BDd-bcCN29jv3fyWdu5xaav4piRTSmkfRIAjNNsaXSJ8YiE7G7nI-kAHT_&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 19, 
        name: "Black Party Dress", 
        price: 2000, 
        offer: "20% Off", 
        img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSRM1oqfIGou9oqMOtM6OZYDXtrMQIUCSWgbLNN_37ix2t8M5EcTo71tVlZiIpMYhau2-VHo7k97F2VMGergvgi74-YnTHZ8CCDWjhV_PLB-xxIK6KUGwm8&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 20, 
        name: "Light Red party Dress", 
        price: 1900, 
        offer: "10% Off", 
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSu-udwt9hyNkRAvghFZaP2_3E35IEm38uFKFkrMN2-uaDKJZItIdPBlEOce8BJ3HxAcjO8odMGX4hW-FMPHZRzE3JgIsbUnBb4PpYge4w&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 21, 
        name: "Lightly White Dress", 
        price: 1800, 
        offer: "15% Off", 
        img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSoOlsNdJdM-BA1rtwBqozXUhXftlUW_4ByNIRREA6EvjBiYErAir5siEyJTSNN7MlxEX2bkYmSXx4QaP8eFWZ5FWQubbtpgaZIUdozN8SzxKoEgyoSHRxxKw&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 22, 
        name: "Light Green Dress", 
        price: 1100, 
        offer: "10% Off", 
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQhHxtaKMZXlvRKAG4swH53yv20WewS98al2GT4tDhoLhVkWvnLC2-pd1ALG8WEx4Bmcdjh4cGXRgy-ZmuLz3YPR8PBhPtvoqcYsrZ1Nx22ofST9DyI6i1-&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 23, 
        name: "Blue Party Dress", 
        price: 1700, 
        offer: "30% Off", 
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR8_0sMh4N9DRdWmS2C3iZ_VD1kkCcZDtrLqnMkie4EuJKIKJOMRyk7QAYjib4uaNYep10NTxn6FU-P_nnfsMsXYicwKV10hThrEJI4hIQ&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 24, 
        name: "Biscut Color Dress", 
        price: 1200, 
        offer: "20% Off", 
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSzQBYQYS_CpdLk93jAxSNd6QzIlAYMpChwm8H6JxgCQial6ga8Rj8HhVd7xk6T3MEeQrnZpeSX6yLHZOVYjfObjd1eAzJMaEYgm1uTuws&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 25, 
        name: "Dark Green Dress", 
        price: 1400, 
        offer: "15% Off", 
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqPVbWfBzLpauNo1IhzT9x2FQdXWZGbSlOVY-Vw6v4p1fbl5F0TV5ifg3D63BDg7gen-TXaMx_RTEX-mDc99G-MubW7_qGf8msRqSW7FAQ&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 26, 
        name: "Purple color Party Dress", 
        price: 1700, 
        offer: "30% Off", 
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQpcXG5Ex2urxlt2AG9PzXQb298XkQucz7H2iW9G5fxdx13VOh-an_wPduR5DjTPGAS6fWfg4XmrDnzV8CHVHkvtU69rJ7JjheJPitrO8M&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },
    {
        id: 27, 
        name: "Light Color Dress", 
        price: 2000, 
        offer: "20% Off", 
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRRr7ZdTNhTG50znA8Bcx-MBcZUJd_pYGlR-cr_SPIHLfTv-Vlj07FHIZWnPYbQ6bYfiKs8Vaz8TLX50m0qlNsfgcKbDkoWqmKOdTxwnPihsiqe-PrOugCkgg&usqp=CAE"
       /* sizes: ["S", "M", "L"] */
    },









    



















];

const cart = [];
const productContainer = document.getElementById("products");
const cartBtn = document.getElementById("cart-btn");
const cartSection = document.getElementById("cart");
const cartItems = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");
const closeCart = document.getElementById("close-cart");

// Function to display products
function displayProducts() {
    productContainer.innerHTML = "";
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <p>Offer: ${product.offer}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Function to add product to cart
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCart();
}

// Function to update the cart
function updateCart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement("li");
        li.innerHTML = `${item.name} - ₹${item.price} <button onclick="removeFromCart(${index})">❌</button>`;
        cartItems.appendChild(li);
    });
    totalPrice.textContent = total;
    cartCount.textContent = cart.length;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Show and hide cart
cartBtn.addEventListener("click", () => {
    cartSection.classList.toggle("cart-hidden");
});
closeCart.addEventListener("click", () => {
    cartSection.classList.add("cart-hidden");
});

// Initial setup
displayProducts();
