async function login(){
    var uname = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var response = await fetch("users.json");
    var users = await response.json();

    for(var i = 0; i < users.length; i++){
        if(uname == users[i].username && pass == users[i].password){
            window.location = "dashboard.html";
            return;
        }
    }
    document.getElementById("msg").innerHTML = "wrong username or password";
}