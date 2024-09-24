import express from 'express'

const app = express()
const PORT = 3000

app.get("/", (req,res) => {
    res.send('Hello World!')
})

app.listen(PORT, ()=> {
    console.log(`Servidor está executando em http://localhost:${PORT}`)
})