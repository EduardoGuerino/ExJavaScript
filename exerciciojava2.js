// Função para contar a ocorrência da letra 'a'
function contarLetraA(texto) {
    // Contando a ocorrência de 'a' e 'A'
    const contagem = (texto.match(/a/gi) || []).length;
    if (contagem > 0) {
        console.log(`A letra 'a' (maiúscula ou minúscula) aparece ${contagem} vez(es) na string.`);
    } else {
        console.log("A letra 'a' não está presente na string.");
    }
}

// Entrada de string (você pode modificar isso conforme necessário)
const stringDeExemplo = "A aranha anda na árvore.";
contarLetraA(stringDeExemplo);

