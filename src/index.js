const MCPSequentialThinking = require('./mcpSequentialThinking');

async function main() {
  // Certifique-se de definir sua chave API do OpenAI no arquivo .env
  const mcp = new MCPSequentialThinking(process.env.OPENAI_API_KEY);

  const problema = "Como podemos melhorar a experiência do usuário em um aplicativo de e-commerce?";

  try {
    console.log("Iniciando processo de pensamento sequencial...\n");
    
    // Gerar pensamentos sequenciais
    const resultados = await mcp.think(problema, 4);
    
    console.log("Problema:", resultados.problem);
    console.log("\nPassos de pensamento:");
    resultados.steps.forEach((step, index) => {
      console.log(`\nPasso ${index + 1}:`);
      console.log(step);
    });

    // Analisar o processo de pensamento
    console.log("\nAnalisando o processo de pensamento...");
    const analise = await mcp.analyzeThoughtProcess(resultados);
    console.log("\nAnálise do processo:");
    console.log(analise);

  } catch (error) {
    console.error("Erro durante o processo:", error);
  }
}

main();