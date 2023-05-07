const bodyParser = require('body-parser');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const cors = require('cors');
require('dotenv').config();

const commentRoutes = require('./routes/comment.routes');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Contents app API",
            version: "1.0.0",
            description: "Contents web application API"
        },
        servers: [
            {
                url: "http://localhost:5000"
            }
        ],
    },
    apis: ['./routes/*.js']
}

let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}


const specs = swaggerJsDoc(options);

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.use(cors());
app.use(allowCrossDomain)

app.use(bodyParser.json());
app.use(express.json({extended: true}));

app.use('/comment', commentRoutes);

module.exports = app;