"use strict"
let object__product = {
    image: "https://picsum.photos/200/175",
    number:  1,
    price: 128,
}
function selectQuantity(select) {
    console.log(select);
    let Quantity = Number(select);
    let result = "";

    for (let i = 1; i < Quantity+1; i++) {
        result += `
    <div class="pic">
        <img src = "${object__product.image}" alt="product">
        <p>Price na fig ${Math.round()}</p>
    </div>`;
    }
    document.getElementById('pic-img').innerHTML = result;
}

selectQuantity(10);

