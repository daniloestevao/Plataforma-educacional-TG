document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastroForm");
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const confirmarSenhaInput = document.getElementById("confirmar_senha");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário para validações personalizadas.

        const email = emailInput.value;
        const senha = senhaInput.value;
        const confirmarSenha = confirmarSenhaInput.value;

        // Verificar se a senha e a confirmação de senha correspondem
        if (senha !== confirmarSenha) {
            alert("A senha e a confirmação de senha não coincidem.");
            return;
        }

        // Verificar se já existe um usuário com o mesmo e-mail (isso é um exemplo simplificado)
        const usuariosCadastrados = localStorage.getItem("usuarios") || "[]";
        const usuarios = JSON.parse(usuariosCadastrados);

        const usuarioExistente = usuarios.find((usuario) => usuario.email === email);

        if (usuarioExistente) {
            alert("Já existe um usuário com este e-mail.");
            return;
        }

        // Se não houver um usuário com o mesmo e-mail, prosseguir com o cadastro
        const novoUsuario = {
            email: email,
            senha: senha,
        };

        usuarios.push(novoUsuario);

        localStorage.setItem("usuarios", JSON.stringify(usuarios));

        alert("Cadastro realizado com sucesso!");
        form.reset(); // Limpar o formulário após o cadastro

    });

    document.addEventListener("DOMContentLoaded", function () {
        const formCurso = document.getElementById("cadastroCursoForm");
        const codigoInput = document.getElementById("codigo");
    
        formCurso.addEventListener("submit", function (event) {
            event.preventDefault();
    
            // Gere um código sequencial automaticamente
            const cursosCadastrados = localStorage.getItem("cursos") || "[]";
            const cursos = JSON.parse(cursosCadastrados);
            const proximoCodigo = cursos.length + 1;
    
            // Preencha o campo de código com o código gerado
            codigoInput.value = proximoCodigo;
    
            // Coleta os dados do curso
            const nomeCurso = document.getElementById("nome_curso").value;
            const duracao = document.getElementById("duracao").value;
            const numAulas = document.getElementById("num_aulas").value;
    
            // Crie um objeto de curso
            const novoCurso = {
                codigo: proximoCodigo,
                nome_curso: nomeCurso,
                duracao: duracao,
                num_aulas: numAulas,
            };
    
            // Adicione o novo curso à lista de cursos cadastrados
            cursos.push(novoCurso);
    
            // Atualize os cursos cadastrados no armazenamento local
            localStorage.setItem("cursos", JSON.stringify(cursos));
    
            alert("Curso cadastrado com sucesso!");
            formCurso.reset();
        });
    });
    
});


        