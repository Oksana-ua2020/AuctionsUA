"use strict"
let object__product = {
    image: "https://picsum.photos/200/300",
    number:  1,
    price: 128,
}
function selectQuantity(select) {
    console.log(select);
    let Quantity = Number(select);
    let result = "";

    for (let i = 1; i < Quantity+1; i++) {
        let price = Math.floor(Math.random() * (100 - 1)) + 1;
        result += `
            <div class="pic">
                <div class="pic-position">
                    <img src = "${object__product.image}" alt="product">
                </div>
                <p>Price ${price} $</p>
            </div>`;
    }
    document.getElementById('pic-img').innerHTML = result;
}

selectQuantity(10);