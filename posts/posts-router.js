const express = require('express');
// make sure to invoke and use Uppercase 
const router = express.Router(); 
router.use(express.json());
const db = require('../data/db');

router.post('/', (req, res) => {
    db.insert(req.body)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json({ message: 'Error posting new data /api/posts', error })
        })
})

router.post('/:id/comments', (req, res) => {
    db.insertComment(req.body)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json({ message: 'Error posting new comment /api/posts/:id/comments', error })
        })
})

router.get('/', (req, res) => {
    db.find(req.query)
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            res.status(500).json({ message: 'Error getting posts /api/posts' })
        });
});

router.get('/:id', (req, res) => {
    db.findById(req.params.id)
        .then(postsId => {
            res.status(200).json(postsId);
        })
        .catch(error => {
            res.status(500).json({ message: 'Error getting posts IDs /api/posts/:id' })
        });
});

router.get('/:id/comments', (req, res) => {
    const id = req.params.id
    db.findPostComments(id)
        .then(comments => {
            res.status(200).json(comments);
        })
        .catch(error => {
            res.status(500).json({ message: 'Error getting comments /api/posts/:id/comments' });
        });
});



module.exports = router;