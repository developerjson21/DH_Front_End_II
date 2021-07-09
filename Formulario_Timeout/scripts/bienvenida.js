window.addEventListener("load", function (){
    
    let body = document.querySelector("body");
    let saludo = document.createElement("h1");
    
    saludo.innerHTML = ` Bienvenido <small> ${localStorage.getItem("Nombre")} </small> al sitio 😀 `
    body.appendChild(saludo);
    
    
    let btnCerrarSesion = document.querySelector("#cerrarSesion");
    
    btnCerrarSesion.addEventListener("click", function () {
        localStorage.removeItem("email");
        window.location.href = "index.html";
        
    })
    
}) 