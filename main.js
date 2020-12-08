"use strict"
for (let i = 1; i < 11; i++) {
    let src = i + '.jpg';
    document.getElementById('pic-img').innerHTML += `
<div class="pic">
    <img src="img/${src}" alt="product">
    <p">Standoff 2</p>
    <div>
        Game forever! I vsyo pofig!
    </div>
</div>`;
}