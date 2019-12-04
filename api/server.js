const express = require('express');
const postsRouter = require('../posts/posts-router');
const server = express();
server.use(express.json());
const db = require ('../data/db');
server.use('/api/posts', postsRouter);


// server.post('/api/posts', (req, res) => {
//     db.insert(req.body)
//         .then(response => {
//             res.status(200).json(response)
//         })
//         .catch(error => {
//             res.status(500).json({ message: 'Error posting new data /api/posts', error })
//         })
// })

// server.post('/api/posts/:id/comments', (req, res) => {
//     db.insertComment(req.body)
//         .then(response => {
//             res.status(200).json(response)
//         })
//         .catch(error => {
//             res.status(500).json({ message: 'Error posting new comment /api/posts/:id/comments', error })
//         })
// })

// server.get('/api/posts', (req, res) => {
//     db.find(req.query)
//         .then(posts => {
//             res.status(200).json(posts);
//         })
//         .catch(error => {
//             res.status(500).json({ message: 'Error getting posts /api/posts', error })
//         });
// });

// server.get('/api/posts/:id', (req, res) => {
//     db.findById(req.params.id)
//         .then(postsId => {
//             res.status(200).json(postsId);
//         })
//         .catch(error => {
//             res.status(500).json({ message: 'Error getting posts IDs /api/posts/:id', error })
//         });
// });

// server.get('/api/posts/:id/comments', (req, res) => {
//     const id = req.params.id
//     db.findPostComments(id)
//         .then(comments => {
//             res.status(200).json(comments);
//         })
//         .catch(error => {
//             res.status(500).json({ message: 'Error getting comments /api/posts/:id/comments', error });
//         });
// });

// server.delete('/api/posts/:id', (req, res) => {
//     const id = req.params.id;
//     db.remove(id)
//         .then(comments => {
//             res.status(200).json(comments);
//         })
//         .catch(error => {
//             res.status(500).json({ message: 'Error removing the comment /api/posts/:id', error });
//         });
// });

// server.put('/api/posts/:id', (req, res) => {
//     const id = req.params.id;
//     db.update(id, req.body)
//         .then(comments => {
//             res.status(200).json(comments);
//         })
//         .catch(error => {
//             res.status(500).json({ message: 'Error removing the comment /api/posts/:id', error });
//         });
// });









module.exports = server;