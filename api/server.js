const express = require('express');
const postsRouter = require('../posts/posts-router');
const server = express();
server.use(express.json());
const db = require ('../data/db');
server.use('/api/posts', postsRouter);

server.get('/api/posts', (req, res) => {
    db.find(req.query)
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            res.status(500).json({ message: 'Error getting posts /api/posts' })
        });
});

server.get('/api/posts/:id', (req, res) => {
    db.findById(req.params.id)
        .then(postsId => {
            res.status(200).json(postsId);
        })
        .catch(error => {
            res.status(500).json({ message: 'Error getting posts IDs /api/posts/:id' })
        });
});

server.get('/api/posts/:id/comments', (req, res) => {
    const id = req.params.id
    db.findPostComments(id)
        .then(comments => {
            res.status(200).json(comments);
        })
        .catch(error => {
            res.status(500).json({ message: 'Error getting comments /api/posts/:id/comments' });
        });
});









module.exports = server;