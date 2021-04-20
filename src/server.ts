import express, { request, response } from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.send("Hello World!")
})

app.post('/', (request, response) => {
  return response.json({
    "NLW": "5º Edição",
    "Trilha": "NodeJS, backend",
    "Instrutor(a)": "Dani Leão",
    
    // by wxllxvm
    "Lembrete": "Sempre haverá um próximo nível"
  })
})

app.listen(3000, () => console.log('Server is running on port 3000'))