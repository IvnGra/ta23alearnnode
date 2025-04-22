import express  from 'express';
const app = express();
const port = 3000;

let messages = []

app.use(express.urlencoded());
app.use((req, res, next) => {

});
app.get('/', (req, res) => {
  res.json(messages);
})

app.post('/', (req,res) => {
    res.header('Access-Control-Allow-Origin')
    res.json(req.body)
})

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
}); 