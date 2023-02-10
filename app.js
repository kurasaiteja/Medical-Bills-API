const express = require('express');
const billsRouter = require('./routes/bills');

const app = express();

app.use(express.json());
app.use('/bills', billsRouter);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = server;