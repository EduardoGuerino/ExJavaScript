// Simulando as lâmpadas e os interruptores
class Lamp {
    constructor() {
        this.isOn = false; // Estado da lâmpada
        this.isWarm = false; // Indica se a lâmpada ficou quente
    }

    // Método para ligar a lâmpada
    turnOn() {
        this.isOn = true;
        this.isWarm = true; // Se ligada, ficará quente
    }

    // Método para desligar a lâmpada
    turnOff() {
        this.isOn = false;
        this.isWarm = false; // Se desligada, não estará mais quente
    }
}

// Inicializando as lâmpadas
const lamp1 = new Lamp();
const lamp2 = new Lamp();
const lamp3 = new Lamp();

// Simulando os interruptores
const switches = {
    switch1: lamp1,
    switch2: lamp2,
    switch3: lamp3
};

// Função para descobrir qual interruptor controla qual lâmpada
function findLamps() {
    // Passo 1: Ligar o primeiro interruptor e esperar
    console.log("Ligando o Interruptor 1...");
    switches.switch1.turnOn(); // Liga a lâmpada 1
    setTimeout(() => {
        // Passo 2: Desligar o primeiro interruptor e ligar o segundo
        console.log("Desligando o Interruptor 1 e ligando o Interruptor 2...");
        switches.switch1.turnOff(); // Desliga a lâmpada 1
        switches.switch2.turnOn(); // Liga a lâmpada 2

        // Agora, vamos verificar as lâmpadas
        checkLamps();
    }, 5000); // Espera 5 segundos (simulação)
}

// Função para verificar as lâmpadas
function checkLamps() {
    console.log("Verificando as lâmpadas...");

    if (lamp1.isOn) {
        console.log("Lâmpada 1 é controlada pelo Interruptor 2.");
    } else if (lamp1.isWarm) {
        console.log("Lâmpada 1 é controlada pelo Interruptor 1.");
    } else {
        console.log("Lâmpada 1 é controlada pelo Interruptor 3.");
    }

    if (lamp2.isOn) {
        console.log("Lâmpada 2 é controlada pelo Interruptor 2.");
    } else if (lamp2.isWarm) {
        console.log("Lâmpada 2 é controlada pelo Interruptor 1.");
    } else {
        console.log("Lâmpada 2 é controlada pelo Interruptor 3.");
    }

    if (lamp3.isOn) {
        console.log("Lâmpada 3 é controlada pelo Interruptor 2.");
    } else if (lamp3.isWarm) {
        console.log("Lâmpada 3 é controlada pelo Interruptor 1.");
    } else {
        console.log("Lâmpada 3 é controlada pelo Interruptor 3.");
    }
}

// Iniciar a busca
findLamps();
