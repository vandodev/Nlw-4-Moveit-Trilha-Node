import express from 'express';

const app = express();

app.get('/', (req,res)=>{
    res.json({Hello: "NLW!"})
})

app.post('/create', (req,res)=>{
   return res.json({Nome: "Evandro Oliveira", Email: "vandoaparecido@hotmail.com"})
})

app.listen(3333, () => console.log("Servidor rodando"));