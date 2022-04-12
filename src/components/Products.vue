<template >
<div class="container-fluid">
  <section class="hero">
  <header id="header">
    
  </header>
  <header class="hero-header">
    <h1 class="hero-title">LA JOYERIA PRODUCTS </h1>
  </header>
</section>
<!-- 
  <div class="row" >
  <div class="card col-sm-12 col-md-4 col-lg-3" v-for='product of products' :key="product.id">
    <img :src="product.image" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{product.title}}</h5>
      <p class="card-text">R{{product.price}}</p>
      <p class="card-text"><small class="text-muted">{{product.description}}</small></p>
      <button class="btn fourth"><i class="bi bi-cart"></i>ADD TO CART</button>
    </div>
  </div>
</section> -->

      <article class="col-md-12">
        <div class="cards-8 section-gray">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3" v-for='product of products' :key="product.id">
                        <div class="card card-product"  >
                            <div class="card-image">
                                 <img class="img" :src= product.image>
                            </div>
                            <div class="table">
                                <h6 class="category text-rose">{{product.category}}</h6>
                                <h4 class="card-caption">
						                     {{product.title}}
						                     </h4>
                                                <div class="card-description"> {{product.description}}</div>
                                <div class="ftr">
                                    <div class="price">
                                        <h4>R{{product.price}}</h4> </div>
                                    <div class="stats">
                                        <button type="button" rel="tooltip" title="" class="btn btn-just-icon btn-simple btn-warning" data-original-title="Saved to Wishlist"> <i class="fa fa-shopping-cart"></i> </button>
                                    </div>
                                     <button @click="removeFromCart(product.id)" v-if="isInCart(product.id)">remove from cart</button>
                                   <button @click="addToCart(product.id)" v-else>add to cart</button>
                                    <button @click="$router.push('/cart')">check out</button>
  
                                </div>
                            </div>
                        </div>
                    </div>
               
</div>
<!-- </div> -->
            </div>
        </div>
      </article>
</div>
</template>
<script>

export default {
    data() {
        return {
			products: [],
      cart:[],
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
	


	},methods: {
    isInCart(itemId) {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItem = this.cart.find(({ id }) => id === itemId);
      return Boolean(cartItem);
    },
    addToCart(itemId) {
      const item = this.items.find(({ id }) => id === itemId);
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      cartItems.push(item);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
    removeFromCart(itemId) {
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      const index = cartItems.findIndex(({ id }) => id === itemId);
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
  },
	}



</script>
<style scoped> 

.hero {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 50vh;
	padding: 1em;
	box-sizing: border-box;
	color: white;
	background: url(https://images.pexels.com/photos/7436101/pexels-photo-7436101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center center no-repeat;
	background-size: cover;
}

.hero-title {
	max-width: 16em;
	margin: 0;
	font-size: 12vh;
	font-weight: bold;
	line-height: .9;
}
	
	@media only screen and (min-width: 32em) { .hero-title { font-size: 16vh; } }	
.col-md-12 {
    padding-right: 0px;
    padding-left: 0px;
}


.btn {
  box-sizing: border-box;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: transparent;
  border: 2px solid #e74c3c;
  /* border-radius: 0.6e; */
  color: #e74c3c;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}
.btn:hover, .btn:focus {
  color: black;
  outline: 0;
}

.fourth {
  border-color: #f1c40f;
  color: #000;
  background-image: linear-gradient(45deg, #f1c40f 50%, transparent 50%);
  background-position: 100%;
  background-size: 400%;
  transition: background 300ms ease-in-out;
}
.fourth:hover {
  background-position: 0;
}


.section-cards {
    z-index: 3;
    position: relative;
}

.section-gray {
    background: #E5E5E5;
    padding: 60px 0 30px 0;
}


.card {
    display: inline-block;
    position: relative;
    width: 100%;
    margin-bottom: 30px;
    border-radius: 6px;
    color: rgba(0, 0, 0, 0.87);
    background: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.card .card-image {
    height: 60%;
    position: relative;
    overflow: hidden;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: -30px;
    border-radius: 6px;
    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}

.card .card-image img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    pointer-events: none;
}

.card .card-image .card-caption {
    position: absolute;
    bottom: 15px;
    left: 15px;
    color: #fff;
    font-size: 1.3em;
    text-shadow: 0 2px 5px rgba(33, 33, 33, 0.5);
}

.card img {
    width: 100%;
    height: auto;
}

.img-raised {
    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}

.card .ftr {
    margin-top: 15px;
}

.card .ftr div {
    display: inline-block;
}

.card .ftr .author {
    color: #888;
}

.card .ftr .stats {
    float: right;
    line-height: 30px;
}

.card .ftr .stats {
    position: relative;
    top: 1px;
    font-size: 14px;
}


/* ============ Card Table ============ */

.table {
    margin-bottom: 0px;
}

.card .table {
    padding: 15px 30px;
}

.card .table-primary {
    background: linear-gradient(60deg, #ab47bc, #7b1fa2);
}

.card .table-info {
    background: linear-gradient(60deg, #26c6da, #0097a7);
}

.card .table-success {
    background: linear-gradient(60deg, #66bb6a, #388e3c);
}

.card .table-warning {
    background: linear-gradient(60deg, #ffa726, #f57c00);
}

.card .table-danger {
    background: linear-gradient(60deg, #ef5350, #d32f2f);
}

.card .table-rose {
    background: linear-gradient(60deg, #ec407a, #c2185b);
}

.card [class*="table-"] {
    color: #FFFFFF;
    border-radius: 6px;
}

.card [class*="table-"] .card-caption a,
.card [class*="table-"] .card-caption,
.card [class*="table-"] .icon i {
    color: #FFFFFF;
}

.card [class*="table-"] .icon i {
    border-color: rgba(255, 255, 255, 0.25);
}

.card [class*="table-"] .author a,
.card [class*="table-"] .ftr .stats,
.card [class*="table-"] .category,
.card [class*="table-"] .card-description {
    color: rgba(255, 255, 255, 0.8);
}

.card [class*="table-"] .author a:hover,
.card [class*="table-"] .author a:focus,
.card [class*="table-"] .author a:active {
    color: #FFFFFF;
}

.card [class*="table-"] h1 small,
.card [class*="table-"] h2 small,
.card [class*="table-"] h3 small {
    color: rgba(255, 255, 255, 0.8);
}


/* ============ Card Blog ============ */

.card-blog {
    margin-top: 30px;
}

.card-blog .card-caption {
    margin-top: 5px;
}

.card-blog .card-image + .category {
    margin-top: 20px;
}

.card-raised {
    box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}



.card-product {
    margin-top: 30px;
}

.card-product .btn-simple.btn-just-icon {
    padding: 0;
}

.card-product .ftr {
    margin-top: 5px;
}

.card-product .ftr .stats {
    margin-top: 4px;
    top: 0;
}

.card-product .ftr h4 {
    margin-bottom: 0;
}

.card-product .card-caption,
.card-product .category,
.card-product .card-description {
    text-align: center;
}

.card-description p {
    color: #888;
}

.card-caption,
.card-caption a {
    color: #333;
    text-decoration: none;
}

.card-caption {
    font-weight: 700;
    font-family: "Roboto Slab", "Times New Roman", serif;
}


</style>


