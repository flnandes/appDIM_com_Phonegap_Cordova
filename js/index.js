var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
//variaveis
var btnEntrar;
var containerLogin = document.getElementById("containerLogin");
var containerRegistro = document.getElementById("containerRegistro");
var telaCarregamento = document.getElementById('telaCarregamento');
var corpoApp = document.getElementsByClassName('app');
var containerRegistrado = document.getElementById("containerRegistrado");
//variaveis
var topApp = document.getElementById("header");
var logoTop = document.getElementById("logoTop");
var nameTop = document.getElementById("nameTop");
var formlogin1 = document.getElementById("form-login1");
//variaveis PAINEL REGISTER
var formlogin = document.getElementById("form-login");
var password = document.getElementById("passaword");
var contact = document.getElementById("contact");
var emailregister = document.getElementById("emailregister");
var city = document.getElementById("city");
var country = document.getElementById("country");
//VARIAVEIS PAINEL REGISTRADO
var nameRegistrado = document.getElementById("nameRegistrado");
var senhaRegistrado = document.getElementById("senhaRegistrado");
var contatoRegistrado = document.getElementById("contatoRegistrado");
var emailRegistrado = document.getElementById("emailRegistrado");
var cidadeRegistrado = document.getElementById("cidadeRegistrado");
var btnRegistro,btnEntrar,btnRegistrar;
var corpoApp = document.getElementById("app");
function btnEntrar(){
    var formPassword1 = document.getElementById("formPassword1");
    var formlogin1 = document.getElementById("form-login1");
    var loginCampos = document.getElementById("panel-login");
    if( formlogin1.value == "fl121314" && formPassword1.value == "fl121314"){
        localStorage.setItem("acesso", true);
        logoTop.style.display = ("none");
        nameTop.innerHTML = ("Seja Bem vindo <br> " + formlogin1.value );
        alert("usuario autenticado")
        loginCampos.style.visibility = "hidden";
    }else{
        nameTop.innerHTML = (formlogin1.value +"<br>" + " você não possui conta clique em CRIAR CONTA! ");
    }
    if(formlogin1.value == ""){
        logoTop.style.display = ("none");
        nameTop.style.color = "#ffffff";
        nameTop.innerHTML = ("Preencha o campo LOGIN!");
        formlogin.focus();
        return false;
    }
    if(formPassword1.value == "" || formPassword1.value.length <= 5){
        logoTop.style.display = ("none");
        nameTop.style.color = "#ffffff";
        nameTop.innerHTML = ("Preencha o campo senha <br> com no minimo 6 caracteres");
        formPassword1.focus();
        return false;
    }

    if(nameRegistrado.value != ""){
        logoTop.style.display = ("none");
        nameTop.style.color = "#ffffff";
    }else{
        logoTop.style.display = ("none");
        nameTop.innerHTML = (formlogin1.value + " você será redirecionado")
    }
    
    logoTop.style.display = ("none");
}
function btnRegistro(){
    containerLogin.style.visibility = 'hidden';
    containerRegistro.style.visibility = 'visible';
    logoTop.style.display = "none";
    nameTop.style.color = "#6BC5D4";
    nameTop.innerHTML = (" Criando conta...");
    nameTop.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
    nameTop.style.marginTop = "30px";
}
// DESCRIÇÃO DOS PRODUTOS E PROJETOS
var descProdProj = document.getElementById("descProdProj");
function dimgitais(){
descProdProj.innerHTML =("Loja online");
};
function dimgitaldim(){
descProdProj.innerHTML = ("Soluções e Inovação");
};
function aplicative(){
descProdProj.innerHTML = ("Tudo sobre Android");
}
function sitesweb(){
descProdProj.innerHTML = ("Desenvolvimento de sites");
}
function grupoDim(){
descProdProj.innerHTML = ("Grupo de Marcas");
}
function flservice(){
descProdProj.innerHTML= ("Instituição tech");
}
function dbldimgitais(){
window.location.href = "https://www.dimgitais.com.br";
}
function dbldimgitaldim(){
window.location.href = "https://www.dimgitaldim.com";
}






