// Função para classificar o herói
async function classificar() {
    const nome = document.getElementById('nome').value;
    const xp = parseInt(document.getElementById('xp').value);

    const response = await fetch('http://localhost:3000/classificar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, xp })
    });

    const data = await response.json();
    document.getElementById('resultado').innerText = data.mensagem;
}