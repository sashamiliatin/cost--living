const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./config/database');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const cors = require('cors')

const app = express();

dotenv.config({path: './config/config.env'});

connectDB()

//pars request to body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));

//Routes
app.use('/', require('./routes/index'))

app.listen(PORT,()=>{console.log('Server is up and running on http://localhost:'+PORT)});