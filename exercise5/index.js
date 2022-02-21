const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const products = require('./routes/products');
const users = require('./routes/users');
const invoices = require('./routes/invoices')

app.use(bodyParser.json());
app.use('/products', products);
app.use('/users', users);
app.use('/invoices', invoices);
app.use(express.static('reactApp/build'));

app.get('/hello', (req, res) => {
  res.send('Tervetuloa Amatsooniin!')
});

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});