const express = require('express');
const flipcoin = require('./public/flipcoin');
const app = express();
const port = 4000;

app.get('/flipcoin', (req, res) => {
    const flip1= new flipcoin ()
    // const flip2= new flipcoin ()
    console.log(flip1.coinFlip());
    res.send(flip1.coinFlip())
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is listening at //localhost:${port}`)
}) 
