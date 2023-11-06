// lista_de_cursos.js

document.addEventListener("DOMContentLoaded", function () {
    // Verifica se há cursos armazenados no localStorage
    const cursosArmazenados = localStorage.getItem("cursos");
    
    if (cursosArmazenados) {
        const cursos = JSON.parse(cursosArmazenados);
        const cursosList = document.getElementById("cursosList");

        cursos.forEach((curso) => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.textContent = curso.nome;
            link.href = curso.link;
            listItem.appendChild(link);
            cursosList.appendChild(listItem);
        });
    }
});
