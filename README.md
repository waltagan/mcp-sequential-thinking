# MCP Sequential Thinking

Uma implementação do MCP (Machine Cognition Process) Sequential Thinking para melhorar o raciocínio sequencial em tarefas complexas.

## Características

- Pensamento sequencial passo a passo
- Análise detalhada do processo de pensamento
- Integração com GPT-4 para raciocínio avançado
- Personalização do número de passos de pensamento

## Instalação

```bash
git clone https://github.com/waltagan/mcp-sequential-thinking.git
cd mcp-sequential-thinking
npm install
```

## Configuração

1. Crie um arquivo `.env` na raiz do projeto
2. Adicione sua chave API do OpenAI:
```
OPENAI_API_KEY=sua-chave-api-aqui
```

## Uso

```javascript
const MCPSequentialThinking = require('./src/mcpSequentialThinking');

const mcp = new MCPSequentialThinking(process.env.OPENAI_API_KEY);

// Exemplo de uso básico
const problema = "Como podemos melhorar a experiência do usuário em um aplicativo?";
const resultados = await mcp.think(problema, 4);

// Analisar o processo de pensamento
const analise = await mcp.analyzeThoughtProcess(resultados);
```

## Exemplo

Execute o exemplo incluído:

```bash
node src/index.js
```

## Contribuindo

Contribuições são bem-vindas! Por favor, sinta-se à vontade para enviar um Pull Request.

## Licença

MIT