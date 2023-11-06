function recoverPassword() {
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;
    var newPassword = document.getElementById("new-password").value;

    // Aqui você pode adicionar a lógica de recuperação de senha, como enviar um email de redefinição ou realizar outras verificações.
    // Neste exemplo, apenas exibimos uma mensagem de sucesso.

    var message = document.getElementById("message");
    message.innerHTML = "Senha recuperada com sucesso!";
    message.className = "success";

    // Limpar os campos após a recuperação bem-sucedida (você pode adicionar um redirecionamento aqui).
    document.getElementById("email").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("new-password").value = "";
}
