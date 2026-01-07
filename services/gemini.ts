
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Business Advisor for "Luminal Digital", a high-end digital transformation and consulting firm.
Your goal is to help potential clients understand Luminal Digital's services and how they might benefit their specific business.

Luminal Digital offers:
1. Digital Transformation (Modernizing legacy systems)
2. Cloud Infrastructure (AWS/Azure/GCP migration, DevOps)
3. Data & AI Strategy (Predictive analytics, ML)
4. Custom Software Development (Web, Mobile, UX/UI)

Tone: Professional, expert, helpful, and concise. 
Rule: Always try to guide the user towards booking a consultation. 
If asked about pricing, mention that we offer bespoke quotes based on project complexity and scope.
Our case studies include Apex Financial (Banking), Urban Mart (Retail), and BioStream Health (Healthcare).
`;

export async function getAdvisorResponse(userQuery: string, history: { role: 'user' | 'model', text: string }[]) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Format history for the API
  const contents = history.map(h => ({
    role: h.role === 'user' ? 'user' : 'model',
    parts: [{ text: h.text }]
  }));

  // Add the current query
  contents.push({
    role: 'user',
    parts: [{ text: userQuery }]
  });

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: contents as any,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request right now. Please try again or contact our team directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently undergoing maintenance. Please reach out to our team at contact@luminaldigital.com.";
  }
}
