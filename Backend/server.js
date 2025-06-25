// Importando o Fastify
// e a função de classificação do herói
const fastify = require('fastify')({ logger: true });
const { classificarHeroi } = require('./index');

// Rota principal
fastify.post('/classificar', async (request, reply) => {
    const { nome, xp } = request.body;
    const resultado = classificarHeroi(nome, xp);
    return { mensagem: resultado };
});

// Start do servidor
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log("Servidor rodando em http://localhost:3000");
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
