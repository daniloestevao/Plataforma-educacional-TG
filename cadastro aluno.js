// Array para armazenar os nomes de usuário já utilizados
var usuariosUtilizados = [];

// Função para verificar se um nome de usuário já está em uso
function validarNomeUsuario(nomeUsuario) {
    // Verifica se o nome de usuário já está no array
    if (usuariosUtilizados.includes(nomeUsuario)) {
        return false; // Nome de usuário já em uso
    } else {
        usuariosUtilizados.push(nomeUsuario); // Adiciona o nome de usuário ao array
        return true; // Nome de usuário disponível
    }
}
