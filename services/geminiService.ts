
import { GoogleGenAI } from "@google/genai";

// Service to interact with the Gemini API for the virtual assistant.
export const getGeminiResponse = async (userPrompt: string) => {
  // Always use process.env.API_KEY directly and assume it is configured.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = "gemini-3.5-flash";

  const systemInstruction = `
    Você é o Assistente Virtual da 'Serviços Gama'. 
    Sua missão é ajudar os clientes a entenderem qual serviço da Serviços Gama eles precisam.
    
    Serviços oferecidos:
    1. Vendas Técnicas: Orientação na escolha de produtos e soluções custo-benefício.
    2. Pintura e Textura: Residencial, comercial, predial, acabamento profissional.
    3. Serviços para MEI e Empresas: Apoio operacional e soluções técnicas sob medida.
    4. Transporte: Normal (pessoas/cargas) e Executivo (conforto, discrição, viagens corporativas).
    
    Diretrizes:
    - Seja extremamente educado, profissional e prestativo.
    - Responda em Português do Brasil.
    - Se o cliente descrever um problema, sugira o serviço específico da Serviços Gama.
    - Sempre reforce os valores: Qualidade, Competência, Ética e Compromisso.
    - Encoraje o cliente a entrar em contato para um orçamento.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userPrompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    // Access the .text property directly as per the latest SDK guidelines.
    return response.text || "Desculpe, não consegui processar sua solicitação.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Houve um erro ao consultar o assistente. Por favor, tente novamente mais tarde.";
  }
};
