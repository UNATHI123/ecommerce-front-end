<template >
<div class="container-fluid">
  <section class="hero">
  <header id="header">
    
  </header>
  <header class="hero-header">
    <h1 class="hero-title">LA JOYERIA PRODUCTS </h1>
  </header>
</section>
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
</style>


