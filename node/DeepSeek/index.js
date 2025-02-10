// Please install OpenAI SDK first: `npm install openai`

import OpenAI from "openai";

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com/v1',
        apiKey: 'sk-36e0a1577c2743a1b3a6d29ce3a1c4fb'
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "1 + 2 = ?" }],
    model: "deepseek-chat",
  });

  console.log(completion.choices[0].message.content);
}

main();