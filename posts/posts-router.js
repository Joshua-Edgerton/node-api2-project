const express = require('express');
// make sure to invoke and use Uppercase 
const router = express.Router(); 
router.use(express.json());
const db = require('../data/db');

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