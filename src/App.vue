<template>
<div id="app">
  <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">La Joyería</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item-active">
          <router-link to="/" class="nav-link">Home</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/products"  class="nav-link">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">Login</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link">Register</router-link> 
        </li>
         <li class="nav-item">
          <router-link to="/profile" class="nav-link">Profile</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link">Contact Us</router-link> 
        </li>
         <li class="nav-item">
          <router-link to="/cart" class="nav-link">Cart</router-link> 
        </li>
          <li class="nav-item">
          <router-link to="/admin" class="nav-link">Admin</router-link> 
        </li>
      </ul>
    </div>
  </div>
</nav>
<router-view/>
  <footer class="footer bg-white shadow align-self-end py-3 px-xl-5 w-100">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-6 text-center text-md-start fw-bold">
                <p class="mb-2 mb-md-0 fw-bold">La Joyería © 2022</p>
              </div>
              <div class="col-md-6 text-center text-md-end text-gray-400">
                <p class="mb-0">Unathi Qolweni</p>
              </div>
            </div>
          </div>
        </footer>
  
</div>
</template>

<style>
.nav-link{
margin: 15px;

}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open Sans Condensed", sans-serif;
  font-weight: 700;
}


</style>
