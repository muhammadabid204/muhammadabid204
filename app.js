function signup(){
    let change = document.getElementById("change");
     let Fullname = document.getElementById("name").value
     let email = document.getElementById("email").value
     let password = document.getElementById("password").value
//data stor local storage

localStorage.setItem("Name", Fullname)
localStorage.setItem("Emai", email)
localStorage.setItem("Password", password)
}


document.getElementById("name").value = ""
document.getElementById("name").value = ""
document.getElementById("name").value = ""


alert("Thanks For Singup")
change.innerhtml = "Login Page"


function Login (){
    let Fullname = document.getElementById("name").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value



if  (localStorage.getItemItem("Name") == Fullname &&
localStorage.getItem("Emai") == email&&
localStorage.getItemItem("Password") == password) {
alert("Thanks For Login")


} else {
    alert("incorrecr user name or password")
}

}