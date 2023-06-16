const express = require('express');
// const uploadRouter = require('./router');

const app = express();


// const path = require('path');
// const fs = require('fs');
// const dotenv = require('dotenv');
const morgan = require('morgan');
// const bodyparser = require("body-parser");

// const connectDB = require('./server/database/connection');


// log requests
app.use(morgan('tiny'));

const PORT = process.env.PORT || 8080

// app.get('/', (_, res) => {
//   res.sendFile(`${__dirname}/index.html`);
// });

app.use(express.json());
// connectDB();
app.use(express.urlencoded({ extended: true }));
// app.use(uploadRouter);


app.listen(8080, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});