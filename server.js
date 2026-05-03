const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Сервер працює!');
});

app.get('/data', (req, res) => {
    let numFromUser = req.query.num;    
    let kvadrat=Math.pow(numFromUser,2);
  res.json({ message: kvadrat });
});


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});