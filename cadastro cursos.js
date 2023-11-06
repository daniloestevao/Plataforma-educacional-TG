document.getElementById("cadastroForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Obtenha os dados do formulário
    const nome = document.getElementById("nome").value;
    const endereco = document.getElementById("endereco").value;
    const dataNascimento = document.getElementById("data_nascimento").value;
    const documento = document.getElementById("documento").value;
    const contato = document.getElementById("contato").value;
    const email = document.getElementById("email").value;
    const confirmarEmail = document.getElementById("confirmar_email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar_senha").value;
    const linkCurso = document.getElementById("link_curso").value; // Novo campo para o link do curso

    // Verifique se os campos de senha e email coincidem
    if (email !== confirmarEmail) {
        alert("Os campos de email não coincidem.");
        return;
    }
    if (senha !== confirmarSenha) {
        alert("Os campos de senha não coincidem.");
        return;
    }

    // Simule o cadastro bem-sucedido (substitua por seu próprio código)
    // Neste exemplo, armazenamos os dados no localStorage para simular o login bem-sucedido.
    const professor = {
        nome,
        endereco,
        dataNascimento,
        documento,
        contato,
        email,
        linkCurso, // Adiciona o link do curso aos dados do professor
    };
    localStorage.setItem("professor", JSON.stringify(professor));

    // Redirecione para a página de inclusão de cursos
    window.location.href = "lista_de_cursos.html"; // Substitua pelo nome da página de lista de cursos
});
