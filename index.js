const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());

server.listen(5000, function () {
    console.log('\n*** Listening on http://localhost:5000 ***\n')
})