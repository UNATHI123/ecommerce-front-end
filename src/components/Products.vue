<template >
<div class="container-fluid">
<!-- <section class="products">
  <div class="product-card  row row-cols-4 row-cols-lg-1 row-cols-md-4" v-for='product of products' :key="product.id" >
    <div class="product-image">
      <img :src="product.image" alt="" /></div>
    <div class="product-info">
      <h5>{{product.title}}</h5>
      <h6>R{{product.price}}</h6>
      <p>{{product.description}}</p>
    </div>
  </div> -->
  <div class="row" >
  <div class="card col-sm-12 col-md-4 col-lg-3" v-for='product of products' :key="product.id">
    <img :src="product.image" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{product.title}}</h5>
      <p class="card-text">{{product.title}}</p>
      <p class="card-text"><small class="text-muted">{{product.title}}</small></p>
    </div>
  </div>
<!-- </section> -->
</div>
</div>
</template>
<script>

export default {
    data() {
        return {
			products: [],
         title:"",
         image:"",
         category:"",
         price:"",
         description:"",
        

			
        }
    },
    mounted() {
        fetch("https://unathi-final-capstone-backend.herokuapp.com/products")
        .then(res => res.json())
        .then(data => this.products = data)
        .catch(err => console.log(err.message))
	


	}
	}



</script>
<style scoped> 





/* .row {
  width: 30%;
  justify-content: flex-start;
  display: flex;
  flex-flow: row wrap;
} */

/* 
.products {
  display: flex;
  flex-wrap: wrap;
}

.product-card {
  padding: 2%;
  flex: 1 100%;
  // shorthand of flex-grow + flex-basis
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
} */
</style>


