const express = require('express');
// make sure to invoke and use Uppercase 
const router = express.Router(); 
router.use(express.json());
const db = require('../data/db');

router.post('/', (req, res) => {
    if (req.body.title && req.body.contents){
        db.insert(req.body)
        .then(response => {
            res.status(201).json({ message: "Succesfully posted with ID", response })
        })
        .catch(error => {
            res.status(500).json({ message: 'Error posting new data /api/posts', error })
        })
    } else {
        res.status(400).json({ message: "Please provide title and contents for post" })
    }

})

router.post('/:id/comments', (req, res) => {
    
    if (!req.params.id) {
        res.status(404).json({ message: "The post with that ID does not exist" })
    } else if (!req.body.text) {
        res.status(400).json({ message: "Please provide text" })
    } else {
        db.insertComment(req.body)
        .then(response => {
            res.status(200).json({ message: 'Comment posted succesfully', response})
        })
        .catch(error => {
            res.status(500).json({ message: 'Error posting new comment /api/posts/:id/comments', error })
        })
    }
})

router.get('/', (req, res) => {
    db.find(req.query)
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(error => {
            res.status(500).json({ message: 'Error getting posts /api/posts', error })
        });
});

router.get("/:id", (req, res) => {
    db.findById(req.params.id)
      .then(post => {
        if (post[0]) {
          res.status(200).json(post);
        } else {
          res.status(404).json({ message: "Post not found" });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: "Error retrieving the post with the specified id"
        });
      });
  });

router.get('/:id/comments', (req, res) => {
    const id = req.params.id
    db.findPostComments(id)
        .then(comments => {
            if (comments[0]){
            res.status(200).json(comments);
            } else {
                res.status(404).json({ message: "The post with the specified ID does not exist." }); 
            }
        })
        .catch(error => {
            res.status(500).json({ message: 'Error getting comments /api/posts/:id/comments', error });
        })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    db.remove(id)
        .then(removed => {
            res.status(200).json({ message: "Succesfully removed", removed });
        })
        .catch(error => {
            res.status(500).json({ message: 'Error removing the comment /api/posts/:id', error });
        });
});

router.put('/:id', (req, res) => {
    const changes = req.body;
    const id = req.params.id;
    db.update(id, changes)
        .then(updated => {
            res.status(200).json({ message: "amount of elements updated", updated });
        })
        .catch(error => {
            res.status(500).json({ message: 'Error updating the comment /api/posts/:id', error });
        });
});



module.exports = router;