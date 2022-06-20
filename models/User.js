const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thought' }],
        thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
        friends: [FriendSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false
    }
);

// get total count of comments and replies on retrieval
UserSchema.virtual('friendCount').get(function () {
    return this.replies.length;
});

const User = model('User', UserSchema);

module.exports = User;
