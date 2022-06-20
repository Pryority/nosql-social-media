const { Thought, User } = require('../models');

const thoughtController = {
    // add comment to pizza
    addThought() {
        console.log(body);
        Comment.create(body)
            .then(({ _id }) => {
                console.log(_id)
            })
    },

    // remove comment
    removeThought() {

    }
};

module.exports = thoughtController;