// let username=document.getElementById(username).value;
// let password=document.getElementById(password).value;


// function login(){
//     if(username==="admin"&&password==="admin"){
//         window.open('dashboad.html', '_blank');
//     }
// }

function submitHandler(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "admin") {
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid username or password");
    }
}

document.querySelector('.login-form').onsubmit = submitHandler;