const div = document.querySelector(".container")

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(data => {
    
    console.log(data);
    
    data.products.map(product => {
        
        
        div.innerHTML += `
        
        <div class="card">
            <img src="${product.thumbnail}" alt="">
            <h1>Title: ${product.title}</h1>
            <h1>Price: $${product.price}</h1>   
            <div class="btns">
                <button class="jsBtn" onclick="seeMore(${product.id})">See More</button>
                <button class="jsBtn" onclick="addToCart(${JSON.stringify(product)})">Add To Cart</button>
            </div>
        </div>
                
                `
                
                
            })
        })
        .catch(err => console.log(err))

        
const cartItems = []
console.log(cartItems);

function addToCart(product) {
    const parsedProduct = JSON.parse(JSON.stringify(product))

    cartItems.push(parsedProduct)

    localStorage.setItem("items", JSON.stringify(cartItems))
    console.log(cartItems)
}


function seeMore(id) {
    // console.log(id);

    localStorage.setItem("id" , id)
    cartItems.push(id)
    window.location = "singleProduct.html"
}   