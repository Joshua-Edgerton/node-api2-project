const express = require('express'); //CommonJS modules
const db = require('./data/db'); // import database file
const server = require('./api/server');
server.use(express.json()); //needed to parse json from body



const port = 4700;
server.listen(port, () => 
console.log(`\n ** Server running on port ${port} \n`)
);