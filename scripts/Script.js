function login{

    document.getElementById("formLogin").addEventListener("submit", function (e) {
    e.preventDefault();

   
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    

    if (!email.includes("@")) return alert("Email Inválido");
    if (senha.length < 4) return alert("Senha Inválida! A senha deve possuir no mínimo 4 caracteres.");

  








    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " + nome;
});

}















































































