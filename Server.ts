const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
import fileUpload from "express-fileupload";

const eventRouter = require('./routes/eventRouter');


app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use('/api', eventRouter);

// app.use("/downloads", express.static("downloads"));

app.listen(5000, () => {
  console.log(`Server running on port Runing 5000`);
});
