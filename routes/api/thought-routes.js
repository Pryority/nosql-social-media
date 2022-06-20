const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReply,
    removeReply
} = require('../../controllers/thought-controller');

// /api/thoughts/<pizzaId>
router.route('/:pizzaId').post(addThought);

// /api/thoughts/<pizzaId>/<thoughtId>
router
    .route('/:pizzaId/:thoughtId')
    .put(addReply)
    .delete(removeThought);

// /api/thoughts/<pizzaId>/<thoughtId>/<replyId>
router.route('/:pizzaId/:thoughtId/:replyId').delete(removeThought);

module.exports = router;
