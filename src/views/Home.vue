<template >
    <div class="header">

<div class="main-content">
  <div class="concept concept-one">
    <div class="hover hover-1"></div>
    <div class="hover hover-2"></div>
    <div class="hover hover-3"></div>
    <div class="hover hover-4"></div>
    <div class="hover hover-5"></div>
    <div class="hover hover-6"></div>
    <div class="hover hover-7"></div>
    <div class="hover hover-8"></div>
    <div class="hover hover-9"></div>
    <h1>La Joyería</h1>
 <h2 class="edit">Exclusive range of diamond rings, bracelets, watches, necklaces customised to suit your occasion.</h2>   

  </div>
      
      </div>
      
</div>
</template>
<script>
export default {
    
}
</script>
<style  scoped>
 
footer {
  text-align: center;
  padding: 1em;
  max-width: 80px;
  position: fixed;
  top: 0;
  right: 25px;
}
footer a {
  text-decoration: none;
  display: inline-block;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: transparent;
  border: 1px dashed #fff;
  color: #fff;
  margin: 5px;
}
footer a:hover {
  background: rgba(255, 255, 255, 0.1);
}
footer a .icons {
  margin-top: 12px;
  display: inline-block;
  font-size: 20px;
}

* {
  box-sizing: border-box;
  overflow: hidden;
  
}

.main-content {
  text-align: center;
  text-transform: uppercase;
  scroll-snap-type: y mandatory;
  position: relative;
  height: 100vh;
  overflow-y: scroll;
}

.hover,
.word,
h1 {
  cursor: pointer;
}

h1 {
  position: relative;
  color: #fff;
  font: 900 60px Montserrat;
  text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}
.edit {
  position:absolute ;
  color: #fff;
  font: 700 30px Montserrat;
  text-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  bottom: 130px;
}
.concept {
  position: relative;
  padding: 5em;
  height: 100vh;
  overflow: hidden;
  scroll-snap-align: center;
}

.concept:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(rgba(0, 0, 0, 0.3), transparent);
  opacity: 0;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
}
.concept:hover:before {
  opacity: 0.10;
}

.concept-one {
  display: grid;
  grid: repeat(3, 1fr)/repeat(3, 1fr);
  background: yellow;
  padding: 8em;
  background: url("https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg") no-repeat center center/cover;

}
.concept-one h1 {
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 50%;
  margin-top: -30px;
  transition: 0.5s ease;
  z-index: 0;
  letter-spacing: 25px;
}
.concept-one .hover {
  z-index: 1;
}
.concept-one .hover-1:hover ~ h1 {
  left: 30px;
  margin-top: -10px;
}
.concept-one .hover-2:hover ~ h1 {
  margin-top: -10px;
}
.concept-one .hover-3:hover ~ h1 {
  right: 30px;
  margin-top: -10px;
}
.concept-one .hover-4:hover ~ h1 {
  left: 30px;
}
.concept-one .hover-6:hover ~ h1 {
  right: 30px;
}
.concept-one .hover-7:hover ~ h1 {
  left: 30px;
  margin-top: -50px;
}
.concept-one .hover-8:hover ~ h1 {
  margin-top: -50px;
}
.concept-one .hover-9:hover ~ h1 {
  right: 30px;
  margin-top: -50px;
}

</style>