const express = require('express');
const helmet = require('helmet');

const server = express();

const cohortsRouter = require('./router/cohorts-router')

server.use(express.json());
server.use(helmet());

server.use('/api', cohortsRouter)

server.get('/', (req, res) => {
    res.send('Server Running On Port 5000')
})

server.listen(5000, function () {
    console.log('\n*** Listening on http://localhost:5000 ***\n')
})