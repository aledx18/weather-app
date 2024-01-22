type conditionType = {
  condition: string
  text: string
}

export async function getPepe(condition: conditionType) {
  const fe = await fetch('http://localhost:3000/api/completion', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ condition })
  })
  return fe.json()
}
