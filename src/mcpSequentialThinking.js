const { OpenAI } = require('openai');
require('dotenv').config();

class MCPSequentialThinking {
  constructor(apiKey) {
    this.openai = new OpenAI({ apiKey });
  }

  async think(problem, steps = 3) {
    const thoughts = [];
    let currentContext = problem;

    for (let i = 0; i < steps; i++) {
      const response = await this.openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "Você é um assistente especializado em pensamento sequencial. " +
                    "Analise o problema atual e forneça o próximo passo lógico " +
                    "considerando todo o contexto anterior."
          },
          {
            role: "user",
            content: `Contexto atual: ${currentContext}\n\n` +
                    `Passo ${i + 1} de ${steps}: Qual é o próximo passo lógico?`
          }
        ],
        temperature: 0.7,
        max_tokens: 500
      });

      const thought = response.choices[0].message.content;
      thoughts.push(thought);
      currentContext = `${currentContext}\n\nPasso ${i + 1}: ${thought}`;
    }

    return {
      problem,
      steps: thoughts,
      finalThought: thoughts[thoughts.length - 1]
    };
  }

  async analyzeThoughtProcess(results) {
    const response = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "Você é um analista de processos de pensamento. " +
                  "Avalie a sequência de pensamentos e forneça insights sobre " +
                  "a qualidade do raciocínio sequencial."
        },
        {
          role: "user",
          content: `Problema: ${results.problem}\n\n` +
                  `Passos de pensamento:\n${results.steps.join('\n\n')}\n\n` +
                  "Por favor, analise a qualidade e coerência deste processo de pensamento."
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return response.choices[0].message.content;
  }
}

module.exports = MCPSequentialThinking;