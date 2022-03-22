<template >
<div class="container-fluid">
<h1></h1>
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-4"  v-for='product of products' :key="product.id">
  <div class='product--red'>
    <div class='product_inner'>
      <img :src="product.image" width='300'>
      <p>{{product.title}}</p>
      <p>{{product.description}}</p>
      <p>R{{product.price}}</p>
      <button><i class="bi bi-cart"></i>Add to Cart</button>
    </div>
</div>

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

.product, .product--pink, .product--yellow, .product--green, .product--red, .product--orange, .product--blue {
  box-shadow: 1px 5px 15px #CCC;
  width: 18em;
  height: auto;
  border-radius: 3px;
  padding: 2em;
  margin: 1em;
  overflow: hidden;
  position: relative;
  flex: auto;
  color: #000;
}
.product--blue {
  background: linear-gradient(-45deg, #92DCE5 50%, rgba(255, 255, 255, 0.5) 50%);
}
.product--orange {
  background: linear-gradient(-45deg, #EF6F6C 50%, rgba(255, 255, 255, 0.5) 50%);
}
.product--red {
  background: linear-gradient(-45deg, #E84855 50%, rgba(255, 255, 255, 0.5) 50%);
}
.product--green {
  background: linear-gradient(-45deg, #70C1B3 50%, rgba(255, 255, 255, 0.5) 50%);
}
.product--yellow {
  background: linear-gradient(-45deg, #E8DB7D 50%, rgba(255, 255, 255, 0.5) 50%);
}
.product--pink {
  background: linear-gradient(-45deg, #FF386D 50%, rgba(255, 255, 255, 0.5) 50%);
}
.product img, .product--blue img, .product--orange img, .product--red img, .product--green img, .product--yellow img, .product--pink img {
  max-width: 100%;
  height: auto !important;
  text-align: center;
}
.product_inner {
  display: flex;
  align-items: center;
  flex-flow: column wrap;
}
.product_inner p {
  color: rgba(255, 255, 255, 0.9);
}
.product_inner button {
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #FFF;
  border-radius: 3px;
  padding: 1em 3em;
  margin: 1em 0 0 0;
  background: none;
  cursor: pointer;
  transition: background ease-in 0.25s;
}
.product_inner button:hover {
  background: white;
  color: #2B2D42;
}
.product_inner button:before {
  font-family: FontAwesome;
  /* content: ""; */
  color: #FFF;
  position: absolute;
  font-size: 1.5em;
  margin: 0 -1.5em;
}
.product_inner button:hover:before {
  color: #2B2D42;
}
.product_overlay {
  background: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translateY(-500px);
  opacity: 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}
.product_overlay h2 {
  color: rgba(43, 45, 66, 0.7);
  font-size: 1.2em;
  margin: 1em 0;
}
.product_overlay i {
  color: rgba(43, 45, 66, 0.7);
  font-size: 1.5em;
}
</style>


