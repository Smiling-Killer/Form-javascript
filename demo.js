
         const from = document.getElementById("form");
         const username = document.getElementById("username");
         const email = document.getElementById("email");
         const password = document.getElementById("password");
         const password2 = document.getElementById("password2");
      
         from.addEventListener('submit',e =>{
              e.preventDefault();
              checkInput();
         });

         

function checkInput() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    console.log(usernameValue);
  
    if(usernameValue === "") {
        setError(username, 'username cannot be blank');
    } else {
        setSuccess(username);
    }

    if (emailValue === "") {
        setError(email, 'email cannot be blank');
    }else if(!isEmail(emailValue)){
       setError(email,'not valid email')
    }else {
        setSuccess(email);
    }

    if (passwordValue === "") {
        setError(password, 'password cannot be blank');
    } else {
        setSuccess(password);
    }

    if (password2Value === "") {
        setError(password2, 'password cannot be blank');
    } else if (password2Value !== passwordValue) {
        setError(password2,"password dose note match")
    }else {
        setSuccess(password2);
    }
   
}

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    small.innerText = message;
    formControl.className= "form-control error";

}

function setSuccess(input){
  const formControl =input.parentElement;
  formControl.className = "form-control success";
  
}

function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email);
}