const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('dist'));

app.post('/submit-survey', (req, res) => {
    console.log(req.body);
    res.send('success');
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});