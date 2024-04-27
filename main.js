function addContact() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    if (nome.trim() === "" || telefone.trim() === "") {
        alert("Por favor, preencha ambos os campos.");
        return;
    }

    var tabela = document.getElementById("contact-list");
    var novaLinha = tabela.insertRow();

    var celulaNome = novaLinha.insertCell(0);
    var celulaTelefone = novaLinha.insertCell(1);

    celulaNome.textContent = nome;
    celulaTelefone.textContent = telefone;

    // Limpar campos após adicionar o contato
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}