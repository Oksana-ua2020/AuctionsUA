"use strict"
function selectQuantity(select) {
    console.log(select);
    let Quantity = Number(select);
    document.getElementById('pic-img').innerHTML = "";
    for (let i = 1; i < Quantity+1; i++) {
        let src = i + '.jpg';
        document.getElementById('pic-img').innerHTML += `
    <div class="pic">
        <img src="https://picsum.photos/id/${i}/200/175" alt="product">
    </div>`;
    }
}

for (let i = 1; i < 11; i++) {
    let src = i + '.jpg';
    document.getElementById('pic-img').innerHTML += `
<div class="pic">
    <img src="https://picsum.photos/id/${i}/200/175" alt="product">
</div>`;
}
