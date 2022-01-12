const express = require('express');
const app = express();

const port = 3000;

app.get('/flipcoin', function(req, res){
    res.send("Hello from the root application URL");
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is listening at //localhost:3000`)
}) 
