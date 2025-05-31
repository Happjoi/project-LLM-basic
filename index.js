import express from "express";
import Groq from "groq-sdk";
import dotenv from "dotenv"

dotenv.config()
const PORT = process.env.PORT

const app = express();
app.use(express.json());
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY 
});

function getGroqChatCompletion(prompt) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `Utilizando seu conhecimento tech, responda ${prompt}`,
      },
    ],
    model: "llama-3.3-70b-versatile",
  });
}

app.post("/api/chat", async (req, res) =>{
  const {prompt} = req.body;

   if(!prompt) {
      return res.status(400).json({error: "mensagem não enviada"})
   }

   try{
      const responseGroq = await getGroqChatCompletion(prompt);
      return res.json({response: responseGroq.choices[0]?.message?.content || ""})
   } catch (error) {
      return res.status(500).json ({error: "Erro ao consultar a API da Groq"});
   }
})


app.listen(PORT , () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})