let cart=[]

fetch("http://localhost:8080/api/products")
.then(res=>res.json())
.then(data=>displayProducts(data))

function displayProducts(products){

let container=document.getElementById("productContainer")

products.forEach(p=>{

let box=document.createElement("div")
box.className="product-box"

box.innerHTML=`

<img src="${p.image}">
<h3>${p.name}</h3>
<p>Price: ${p.price}</p>
<p>Discount: ${p.discount}%</p>

<button onclick='addToCart(${JSON.stringify(p)})'>
Add To Cart
</button>

`

container.appendChild(box)

})

}

function addToCart(product){

let item=cart.find(i=>i.id===product.id)

if(item){
item.qty++
}else{
cart.push({...product,qty:1})
}

renderCart()

}

function renderCart(){

let table=document.getElementById("cartTable")

table.innerHTML=""

cart.forEach(item=>{

let row=`

<tr>

<td>${item.name}</td>
<td>${item.id}</td>

<td>
<button onclick="changeQty(${item.id},-1)">-</button>
${item.qty}
<button onclick="changeQty(${item.id},1)">+</button>
</td>

<td>${item.price}</td>

<td>${item.price*item.qty}</td>

<td>
<button onclick="removeItem(${item.id})" style="background:red">
Remove
</button>
</td>

</tr>

`

table.innerHTML+=row

})

}

function changeQty(id,val){

let item=cart.find(i=>i.id===id)

item.qty+=val

if(item.qty<=0){
removeItem(id)
}

renderCart()

}

function removeItem(id){

cart=cart.filter(i=>i.id!==id)

renderCart()

}

let index = 0;
showSlides();

function showSlides(){

    let slides = document.getElementsByClassName("slide");

    for(let i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }

    index++;

    if(index > slides.length){
        index = 1;
    }

    slides[index-1].style.display = "block";

    setTimeout(showSlides, 3000); // change every 3 seconds
}