# Project LLM – API de Chat com Groq LLM

Este repositório contém um exemplo simples de aplicação Node.js usando Express para expor um endpoint HTTP que consome a API de chat do Groq (Groq LLM). Abaixo você encontrará instruções de como configurar, instalar e executar o projeto.

---

## Visão Geral

Este projeto mostra como:
1. Montar um servidor HTTP usando **Express**.  
2. Configurar e usar o **Groq SDK** para criar um chat completion com o modelo Llama 3.3-70B (versão “versatile”).  
3. Criar um único endpoint (`POST /api/chat`) que recebe um JSON contendo um `prompt` e devolve a resposta gerada pelo modelo.

Em outras palavras, você envia uma mensagem (“prompt”) em português (ou qualquer outro idioma), repassamos para o Groq LLM e retornamos a resposta no formato JSON.

---

## Pré-requisitos

Antes de começar, verifique se você tem instalado em sua máquina:

- **Node.js ≥ 18.x** e **npm ≥ 8.x** (ou **yarn**, se preferir).  
- Uma **chave de API do Groq** (GROQ_API_KEY). Caso ainda não tenha, crie uma conta no portal Groq e gere sua chave.  
- (Opcional) Um ambiente Linux/macOS ou Windows com terminal/cmd para rodar comandos.
