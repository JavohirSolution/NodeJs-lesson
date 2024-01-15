import express from 'express';
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send('welcome');
})

app.listen(PORT, () => {
    console.log(`Server is running on:http://localhost:${PORT}`)
})