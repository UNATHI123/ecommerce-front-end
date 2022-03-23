<template >
    <div class="container">
        <section class="products">
  <div class="product-card  row row-cols-4 row-cols-lg-1 row-cols-md-4" v-for='product of products' :key="product.id" >
    <div class="product-image">
      <img :src="product.image" alt="" /></div>
    <div class="product-info">
      <h5>{{product.title}}</h5>
      <h6>R{{product.price}}</h6>
      <p>{{product.description}}</p>
      <!-- Button trigger modal -->
<button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal" v-on:click="Update">
  EDIT
</button>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" >{{product.title}}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
    
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
<button type="button" class="btn btn-outline-danger" v-on:click="Delete">DELETE</button>
    </div>
  </div>
</section>

  <div class="row row-cols-4 row-cols-lg-1 row-cols-md-4" v-for='user of users' :key="user.id" >
 <button type="button" class="btn btn-outline-success">Edit</button>
    <button type="button" class="btn btn-outline-danger">Delete Product</button>
    
  </div>
  
</div>
    

</template>
<script>

export default {
     data() {
        return {
		products: [],
         title:null,
         image:null,
         category:null,
         price:null,
         description:null,
        

			
        }
    },
    mounted() {
        fetch("https://unathi-final-capstone-backend.herokuapp.com/products")
        .then(res => res.json())
        .then(data => this.products = data)
        .catch(err => console.log(err.message))
}, 
   
   methods: {
       Delete(){
           fetch('https://unathi-final-capstone-backend.herokuapp.com/products/:id', {
  method: 'DELETE',
});

},
Update(){
           fetch('https://unathi-final-capstone-backend.herokuapp.com/products/:id', {
  method: 'PATCH',
  body: JSON.stringify({
    title: this.title,
    image:this.image,
    category:this.category,
    price:this.price,
    description:this.description

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

       }
   },

}
</script>


<style >
    
.products {
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  padding: 2%;
  flex: 1 100%;
  /*// shorthand of flex-grow + flex-basis*/
}
@media screen and (min-width: 600px) {
  .product-card {
    flex: 1 50%;
  }
}
@media screen and (min-width: 800px) {
  .product-card {
    flex: 1 25%;
  }
}
@media screen and (min-width: 1080px) {
  .product-card {
    flex: 1 20%;
  }
}
@media screen and (min-width: 800px) {
  .product-card:nth-child(1), .product-card:nth-child(2) {
    flex: 2 50%;
  }
}
@media screen and (min-width: 1080px) {
  .product-card:nth-child(1), .product-card:nth-child(2) {
    flex: 1 20%;
  }
}
.product-card img {
  max-width: 100%;
  height: auto;
}
.product-card .product-info {
  margin-top: auto;
  text-align: center;
}

</style>