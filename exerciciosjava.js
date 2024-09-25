function fibonacciSequence(limit) {
    const fib = [0, 1];
    while (true) {
        const nextFib = fib[fib.length - 1] + fib[fib.length - 2];
        if (nextFib > limit) break;
        fib.push(nextFib);
    }
    return fib;
}

function isInFibonacci(num) {
    const fibSeq = fibonacciSequence(num);
    return fibSeq.includes(num);
}

// Número a ser verificado
const numberToCheck = 21; // Você pode alterar este número

if (isInFibonacci(numberToCheck)) {
    console.log(`${numberToCheck} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numberToCheck} não pertence à sequência de Fibonacci.`);
}
