const idOfProduct = localStorage.getItem("id")


const div = document.querySelector(".container") 
const container = document.querySelector(".reviewContainer")



fetch(`https://dummyjson.com/products/${idOfProduct}`)
.then(res => res.json())
.then(product => {
    console.log(product);
    
    div.innerHTML += `
    
        <div class="card">
            <h1>Title: ${product.title}</h1>
            <img src="${product.thumbnail}" alt="">
            <h1>Brand: ${product.brand}</h1>
            <h1>Discount: %${product.discountPercentage}</h1>
            <h1>Price: $${product.price}</h1>
        </div>
    
    `

  

    product.reviews.map(item => {
        container.innerHTML += `

        <div class="contentReview">
           <h2>Name: ${item.reviewerName}</h2>
           <h2>Rating: ${item.rating}</h2>
           <h3>Comment: ${item.comment}</h3>
       </div>
   
   `
    })

    
})
.catch(err => console.log(err));