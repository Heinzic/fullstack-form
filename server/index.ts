import express from 'express'

const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));

const PORT = 3000

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Thank you for your interest, ${req.body.name}`)
})

app.listen(PORT, () => {
    console.log(`Run on ${PORT}`);
})