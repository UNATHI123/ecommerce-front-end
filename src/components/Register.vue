<template>
<div class="container">
  <p class="h1 text-center">New User ,Register <br> Already have an account
  <button type="button" class="btn btn-success"> <router-link to="/login">LOGIN</router-link></button>

  </p>
 <form  @submit.prevent="signIn" id="contact">
    <h3> Contact Form</h3>
    <h4>Contact us for custom quote</h4>
    <fieldset>
		<label for="name">Username</label>
      <input placeholder="Your name" type="text" tabindex="1" v-model="username">
    </fieldset>
    <fieldset>
		<label for="email">Email</label>
      <input placeholder="Your Email Address" type="email" tabindex="2" v-model="email">
    </fieldset>
    <fieldset>
		<label for="password">Password</label>
      <input placeholder="Your Password" type="tel" tabindex="3" v-model="password">
    </fieldset>

    <fieldset>
      <button name="submit" type="submit" id="contact-submit">Submit</button>
    </fieldset>
  </form>
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
    signIn(){
      console.log(this.password);
      fetch('https://unathi-final-capstone-backend.herokuapp.com/users', {
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
localStorage.setItem("id", user.id);
localStorage.setItem("name", user.username);
localStorage.setItem("email", user.email);
    
       this.$router.push({name:"Login"});  
  }).catch((err)=>{  
    alert(err);  
    });  
  }, 
  }, 
};

</script>

<style scoped>


#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea,
#contact button[type="submit"] {
  font: 400 12px/16px "Roboto", Helvetica, Arial, sans-serif;
}

#contact {
  background: #F9F9F9;
  padding: 25px;
  margin: 150px 0;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

#contact h3 {
  display: block;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 10px;
}

#contact h4 {
  margin: 5px 0 15px;
  display: block;
  font-size: 13px;
  font-weight: 400;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

#contact input[type="text"],
#contact input[type="email"],
#contact input[type="tel"],
#contact input[type="url"],
#contact textarea {
  width: 100%;
  border: 1px solid #ccc;
  background: #FFF;
  margin: 0 0 5px;
  padding: 10px;
}

#contact input[type="text"]:hover,
#contact input[type="email"]:hover,
#contact input[type="tel"]:hover,
#contact input[type="url"]:hover,
#contact textarea:hover {
  -webkit-transition: border-color 0.3s ease-in-out;
  -moz-transition: border-color 0.3s ease-in-out;
  transition: border-color 0.3s ease-in-out;
  border: 1px solid #aaa;
}

#contact textarea {
  height: 100px;
  max-width: 100%;
  resize: none;
}

#contact button[type="submit"] {
  cursor: pointer;
  width: 10%;
  border: none;
  background: #4CAF50;
  color: #FFF;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
}

#contact button[type="submit"]:hover {
  background: #43A047;
  -webkit-transition: background 0.3s ease-in-out;
  -moz-transition: background 0.3s ease-in-out;
  transition: background-color 0.3s ease-in-out;
}

#contact button[type="submit"]:active {
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

.copyright {
  text-align: center;
}

#contact input:focus,
#contact textarea:focus {
  outline: 0;
  border: 1px solid #aaa;
}

::-webkit-input-placeholder {
  color: #888;
}

:-moz-placeholder {
  color: #888;
}

::-moz-placeholder {
  color: #888;
}

:-ms-input-placeholder {
  color: #888;
}
a {
    color: WHITE;
    text-decoration: none;
    background-color: transparent;
}
</style>
