import { StreamingTextResponse, CohereStream } from 'ai'

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const { text, condition } = await req.json()
  console.log(text, condition)

  const body = JSON.stringify({
    prompt: `today the weather is ${text} and it's ${condition}, what do you recommend me to do when leaving home?`,
    model: 'command-nightly',
    max_tokens: 80,
    stop_sequences: [],
    temperature: 0.9,
    return_likelihoods: 'NONE',
    stream: true
  })

  const response = await fetch('https://api.cohere.ai/v1/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.COHERE_API_KEY}`
    },
    body
  })

  // Check for errors
  if (!response.ok) {
    return new Response(await response.text(), {
      status: response.status
    })
  }

  // Extract the text response from the Cohere stream
  const stream = CohereStream(response)
  console.log(stream)

  // Respond with the stream
  return new StreamingTextResponse(stream)
}
