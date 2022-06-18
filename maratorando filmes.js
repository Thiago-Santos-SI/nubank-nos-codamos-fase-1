const duracoes1 = [2.00, 1.90, 1.04, 1.25, 2.5, 1.75]; // Resultado 4 dias.
const duracoes2 = [1.01, 1.01, 1.01, 1.4, 2.4]; // Resultado 3 dias.
const duracoes3 = [1.01, 1.99, 1.32, 1.4]; // Resultado 2 dias.
const duracoes4 = [1.01, 1.01, 1.01, 1.01]; // Resultado 2 dias.
const duracoes5 = [1.01, 1.99, 1.01, 1.01, 2.00, 1.34]; // Resultado 4 dias.
const duracoes6 = [1.01, 2.99, 2.01, 2.00, 3.00, 1.10, 2.34]; // Resultado 6 dias.
const duracoes7 = [1.04, 1.25, 1.55, 1.58, 1.60, 1.75, 1.9, 2.50]; // Resultado 6 dias.
const duracoes8 = [1.04, 1.01, 1.01, 1.58, 1.60, 1.75, 1.9, 1.01]; // Resultado 4 dias.

function min(durations) {
    durations.sort()
    let i = 0;
    let j = durations.length - 1;
    let qtd_dias = 0;
    while (i <= j) {
        if (durations[i] + durations[j] <= 3) {
            i++;
        }
        j--;
        qtd_dias++;
    }
    return qtd_dias;
}

console.log(min(duracoes8))