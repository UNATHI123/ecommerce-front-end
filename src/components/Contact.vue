<template>
    <div class="container"> 
<h1 class="text-center"><span>Query ? Contact Us </span></h1>
<section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
  <div class="section-title">
     <h2>Contact</h2>
      </div>
<div class="row mt-1">

<div class="col-lg-4">
  <div class="info">
    <div class="address">
      <i class="bi bi-geo-alt"></i>
      <h4>Location:</h4>
      <p>Western Cape,322 Chiappini St, Cape Town, 8001, South Africa.</p>
    </div>

    <div class="email">
      <i class="bi bi-envelope"></i>
      <h4>Email:</h4>
      <p>uqolweni@gmail.com</p>
    </div>

  <div class="phone">
    <i class="bi bi-phone"></i>
    <h4>Call:</h4>
    <p>+27 780 048 135</p>
      </div>
</div>
</div>

<div class="col-lg-8 mt-5 mt-lg-0">
<form @submit.prevent="handleSubmit" role="form" class="php-email-form">
  <div class="row">
    <div class="col-md-6 form-group">
      <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" v-model="text">
    </div>
    <div class="col-md-6 form-group mt-3 mt-md-0">
      <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" v-model="email">
    </div>
  </div>
  <div class="form-group mt-3">
    <input type="text" class="form-control" name="number" id="number" placeholder="Telephone" v-model="tel">
  </div>
  <div class="form-group mt-3">
    <textarea class="form-control" name="message" rows="5" placeholder="Message" v-model="textarea"></textarea>
  </div>
  <div class="my-3">
    <div class="loading">Loading</div>
    <div class="error-message"></div>
    <div class="sent-message">Your message has been sent. Thank you!</div>
  </div>
  <div class="text-center"><button type="submit">Send Message</button></div>
</form>

          </div>

        </div>

      </div>
    </section>

    </div>
    
</template>
<script>

export default {
 data(){
	 return{
		 text:null,
		 email:null,
		 tel:null,
		 textarea:null
		
	 }
 } ,
 methods:{
	handleSubmit(){
    if(this.text && this.email && this.tel && this.textarea) {
    fetch('https://unathi-final-capstone-backend.herokuapp.com/contact', {
        method: 'POST',
        body: JSON.stringify({
            text:  this.text,
            email: this.email,
            tel: this.tel,
            textarea: this.textarea
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })                                                                                                                 
    .then((response) => response.json())
    .then((json) => alert(json.msg))
    .catch((e)=>alert(e.msg));
}
else {
    alert("Please enter all values")
}
		
	 },
 }  
}


</script>
<style  scoped>


  .contact .info {
  width: 100%;
  background: #fff;
}
.contact .info i {
  font-size: 20px;
  color: #0563bb;
  float: left;
  width: 44px;
  height: 44px;
  background: #eef7ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
}
.contact .info h4 {
  padding: 0 0 0 60px;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #45505b;
}
.contact .info p {
  padding: 0 0 0 60px;
  margin-bottom: 0;
  font-size: 14px;
  color: #728394;
}
.contact .info .email, .contact .info .phone {
  margin-top: 40px;
}
.contact .info .email:hover i, .contact .info .address:hover i, .contact .info .phone:hover i {
  background: gold;
  color: #fff;
}
.contact .php-email-form {
  width: 100%;
  background: #fff;
}
.contact .php-email-form .form-group {
  padding-bottom: 8px;
}
.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}
.contact .php-email-form .error-message br + br {
  margin-top: 25px;
}
.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}
.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}
.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}
.contact .php-email-form input, .contact .php-email-form textarea {
  border-radius: 4px;
  box-shadow: none;
  font-size: 14px;
}
.contact .php-email-form input {
  height: 44px;
}
.contact .php-email-form textarea {
  padding: 10px 12px;
}
.contact .php-email-form button[type=submit] {
  background: gold;
  border: 0;
  padding: 10px 35px;
  color: #fff;
  transition: 0.4s;
  border-radius: 50px;
}
.contact .php-email-form button[type=submit]:hover {
  background: crimson;
}
@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
  
</style>