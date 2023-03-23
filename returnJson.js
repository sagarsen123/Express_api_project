const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;


app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

getData = async (url) =>{
    let apiResult = await fetch(url);
   let result = await apiResult.json();
   return result
}


app.post('/apiResult',async (req,res)=>{
    let incomeMess = req.body.category;
    let url = `https://newsapi.org/v2/everything?q=${incomeMess}&apiKey=663be6ff529e406889d0fb6fd81cedf1`
    let apiResult =await getData(url);

    console.log(incomeMess);
    res.send(apiResult)
})
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));