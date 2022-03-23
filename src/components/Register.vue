<template>
<div class="container">
 
 <!-- <div class="container">
   <div class="section-title">
        <h2>SIGN UP</h2>
        <p>Sign Up with Us</p>
      </div>

  <Form @submit.prevent="register"  id="contact" >  
  <div v-if="!successful">
    <fieldset>
      <label for="name">username</label>
      <ErrorMessage name="username" class="error-feedback" />
      <input placeholder=" eg.John Doe" type="text" tabindex="1" class="form-control" v-model="username">
    </fieldset><br>
    <fieldset>
      <label for="email">Email</label>
      <ErrorMessage name="email" class="error-feedback" /> 
      <input placeholder="eg.johndoe@gmail.com" type="email" class="form-control"  v-model="email" >
    </fieldset><br>
    <fieldset>
      <label for="password">Password</label>
      <ErrorMessage name="password" class="error-feedback" /> 
     <input  class="form-control" v-model="password" >
    </fieldset><br>
   <button class="btn btn-primary btn-block" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              Sign Up
           </button>
           <p class="logInText">Already have an account?</p>
           <router-link :to="{name:'Login'}">
              <button class="btn btn-success" :disabled="loading">
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              >
              </span>
              LOG IN
           </button>
            </router-link>
           
    </div>
 
    </Form>
<div>
</div
><div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
        {{ message }}
       </div>
 </div>
   </div> -->

<div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" ><label for="tab-1" class="tab"><router-link to="/login" class="nav-link">Log In</router-link> </label>
		<input id="tab-2" type="radio" name="tab" class="sign-up" checked><label for="tab-2" class="tab">Sign Up</label>
		<div class="login-form">
			<div class="sign-in-htm" >
		</div> 
			<div class="sign-up-htm"  @submit.prevent="signup"  >
				  <div v-if="!successful">
				<div class="group">
					<label for="user" class="label">Username</label>
					<input id="user" type="text" class="input" v-model="username">
				</div>
				<div class="group">
					<label for="pass" class="label">Email Address</label>
					<input id="pass" type="text" class="input"  v-model="email">
				</div>

				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password" v-model="password" >
				</div>
			

				<div class="group">
					<input type="submit" class="button" value="Sign Up"  :disabled="loading" >
					   <span v-show="loading" class="spinner-border spinner-border-sm"> </span>
		   </div>
				 <div class="hr"></div>
				
			</div>
		</div>
	</div>

	</div>
</div>
</div>
</template>
<script>
export default {
  data(){
    return {
      username:null,
	   email:null,
       password:null,
    };
  },
  methods: {
    signup(){
      console.log(this.password);
      fetch('https://unathi-final-capstone-backend.herokuapp.com/user/signup', {
  method: 'POST',
  body: JSON.stringify({
    username: this.username,
	 email: this.email,
	 password: this.password,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((response)=>response.json())  
 .then((json)=>{  
          console.log(json); 
        alert("User registered");     
localStorage.setItem("jwt",json.jwt);  
       this.$router.push({name:"Login"});  
  }).catch((err)=>{  
    alert(err);  
    });  
  }, 
  }, 
};

</script>

<style scoped>

.section-title h2 {
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  line-height: 1px;
  margin: 0 0 20px 0;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: white;
  font-family: "Poppins", sans-serif;
}
.section-title h2::after {
  content: "";
  width: 120px;
  height: 1px;
  display: inline-block;
  background: white;
  margin: 4px 10px;
}
.section-title p {
  margin: 0;
  margin: -15px 0 15px 0;
  font-size: 36px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #fff;
}


.container {
	max-width:400px;
	width:100%;
  position:relative;
}
/* body{
	margin:0;
	color:#6a6f8c;
	background:#c8c8c8;
	font:600 16px/18px 'Open Sans',sans-serif;
} */
*,:after,:before{box-sizing:border-box}
.clearfix:after,.clearfix:before{content:'';display:table}
.clearfix:after{clear:both;display:block}
a{color:inherit;text-decoration:none}

.login-wrap{
	width:100%;
	margin:auto;
	max-width:525px;
	min-height:670px;
	position:relative;
	background:url(https://images.pexels.com/photos/3715989/pexels-photo-3715989.jpeg) no-repeat center;
	box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);
  background-size: cover;
}
.login-html{
	width:100%;
	height:100%;
	position:absolute;
	padding:90px 70px 50px 70px;
	background:rgba(134, 159, 221, 0.9);
}
.login-html .sign-in-htm,
.login-html .sign-up-htm{
	top:0;
	left:0;
	right:0;
	bottom:0;
	position:absolute;
	transform:rotateY(180deg);
	backface-visibility:hidden;
	transition:all .4s linear;
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check{
	display:none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button{
	text-transform:uppercase;
}
.login-html .tab{
	font-size:22px;
	margin-right:15px;
	padding-bottom:5px;
	margin:0 15px 10px 0;
	display:inline-block;
	border-bottom:2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab{
	color:#fff;
	border-color:#1161ee;
}
.login-form{
	min-height:345px;
	position:relative;
	perspective:1000px;
	transform-style:preserve-3d;
}
.login-form .group{
	margin-bottom:15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button{
	width:100%;
	color:#fff;
	display:block;
}
.login-form .group .input,
.login-form .group .button{
	border:none;
	padding:15px 20px;
	border-radius:25px;
	background:rgba(255,255,255,.1);
}
.login-form .group input[data-type="password"]{
	text-security:circle;
	-webkit-text-security:circle;
}
.login-form .group .label{
	color:black;
	font-size:12px;
}
.login-form .group .button{
	background:#1161ee;
}
.login-form .group label .icon{
	width:15px;
	height:15px;
	border-radius:2px;
	position:relative;
	display:inline-block;
	background:rgba(255,255,255,.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after{
	content:'';
	width:10px;
	height:2px;
	background:#fff;
	position:absolute;
	transition:all .2s ease-in-out 0s;
}
.login-form .group label .icon:before{
	left:3px;
	width:5px;
	bottom:6px;
	transform:scale(0) rotate(0);
}
.login-form .group label .icon:after{
	top:6px;
	right:0;
	transform:scale(0) rotate(0);
}
.login-form .group .check:checked + label{
	color:#fff;
}
.login-form .group .check:checked + label .icon{
	background:#1161ee;
}
.login-form .group .check:checked + label .icon:before{
	transform:scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after{
	transform:scale(1) rotate(-45deg);
}
.login-html .sign-in:checked + .tab + .sign-up + .tab + .login-form .sign-in-htm{
	transform:rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm{
	transform:rotate(0);
}

.hr{
	height:2px;
	margin:60px 0 50px 0;
	background:rgba(255,255,255,.2);
}
.foot-lnk{
	text-align:center;
}
</style>
