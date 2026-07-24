const frases = [
    "O sucesso é construído todos os dias.",
    "Nunca pare de aprender.",
    "Cada erro é uma oportunidade de crescimento.",
    "Persistência leva ao resultado.",
    "A prática torna você melhor."
];

function gerarFrase() {
    const indice = Math.floor(Math.random() * frases.length);
    document.getElementById("frase").textContent = frases[indice];
}