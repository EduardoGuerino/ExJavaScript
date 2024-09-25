// Função para encontrar o próximo elemento com base na sequência
function nextElement(sequence) {
    switch (sequence) {
        case 'a':
            return 9; // 1, 3, 5, 7
        case 'b':
            return 128; // 2, 4, 8, 16, 32, 64
        case 'c':
            return 49; // 0, 1, 4, 9, 16, 25, 36
        case 'd':
            return 100; // 4, 16, 36, 64
        case 'e':
            return 13; // 1, 1, 2, 3, 5, 8
        case 'f':
            return 20; // 2, 10, 12, 16, 17, 18, 19
        default:
            return null; // Caso inválido
    }
}

// Exibindo os próximos elementos
console.log("Próximo elemento da sequência a:", nextElement('a'));
console.log("Próximo elemento da sequência b:", nextElement('b'));
console.log("Próximo elemento da sequência c:", nextElement('c'));
console.log("Próximo elemento da sequência d:", nextElement('d'));
console.log("Próximo elemento da sequência e:", nextElement('e'));
console.log("Próximo elemento da sequência f:", nextElement('f'));
