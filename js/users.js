function btnRegistrar(){
    if(formlogin.value == ""){
        logoTop.style.display = ("none");
        nameTop.style.color = "#ffffff";
        nameTop.innerHTML = ("Preencha o campo NOME!")
        formlogin.focus();
        return false;
    }
    if(password.value.length <= 5){
        logoTop.style.display = ("none");
        nameTop.style.color = "#ffffff";
        nameTop.innerHTML = ("Preencha o campo senha <br> com no minimo 6 caracteres");
        password.focus();
        return false;
    }
    nameTop.innerHTML = ("Sua conta" + "<br>" + formlogin.value)
    nameTop.style.color = "#ffffff";
    containerRegistro.style.visibility = 'hidden';
    containerRegistrado.style.visibility = 'visible';
    nameRegistrado.innerHTML = formlogin.value;
    senhaRegistrado.innerHTML = password.value;
    contatoRegistrado.innerHTML = contact.value;
    emailRegistrado.innerHTML = emailregister.value;
    cidadeRegistrado.innerHTML = city.value;
    estadoRegistrado.innerHTML = country.value;
   
}