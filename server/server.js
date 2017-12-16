const express = require('express');
const bodyParser = require('body-parser');
const cors = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3333
app.listen(port, () => console.log(`listening on port ${port}`));


app.get('/api/test', (req, res) => {
    res.status(200).send('http://i63.tinypic.com/2j9y8p.png');
})