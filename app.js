const div = document.querySelector(".container")

const datafetch = fetch('https://dummyjson.com/products')
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
                <button class="jsBtn" onclick="addToCart(${product.index})">Add To Cart</button>
            </div>
        </div>
                
                `
                
                
            })
        })
        .catch(err => console.log(err))

        
const cartItems = []
console.log(cartItems);

function addToCart(index) {
    // cartItems.push(datafetch[index])
}

// const checkIndex = cartItems.findIndex(item => item.id === mobilePhones[index].id);
//             console.log("index kia ha",checkIndex)
//     if(checkIndex === -1){
//         mobilePhones[index].quantity = 1
//         cartItems.push(mobilePhones[index]) 
//         Swal.fire({
//         title: "Product added to cart successfully!",   
//         icon: "success"
//       });
//     } else{
        // mobilePhones[index].quantity = 1 
//         cartItems[checkIndex].quantity += 1;
//         Swal.fire({
//             title: "Product quantity increased",   
//             icon: "success"
//           });
//     }




function seeMore(id) {
    // console.log(id);

    localStorage.setItem("id" , id)
    cartItems.push(id)
    window.location = "singleProduct.html"
}

const counting = 0

// function countingItems() {
//     if(cartItems.length > 1){
//         counting++
//     } else{

//     }
// }