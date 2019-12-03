const express = require('express');
const postsRouter = require('../posts/posts-router');
const server = express();
server.use(express.json());
const db = require ('../data/db');
server.use('/api/posts', postsRouter);










module.exports = server;