const regForm = document.getElementById("reg-form");
const regButton = document.getElementById("reg-form-submit");
const regErrorMsg = document.getElementById("reg-error-msg");
 
regButton.addEventListener("click", (e) => {
    e.preventDefault();
    var u = regForm.username.value.length;
    var p  = regForm.password.value.length;
 
    if (u == 0 || p == 0) {
       
        regErrorMsg.style.opacity = 1;
    } else {
        alert("You have successfully registered.");
        window.open(href = "./login.html")
        location.reload()
    }
})
