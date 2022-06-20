const { Schema } = require('mongoose');
const dateFormat = require('../../utils/dateFormat')

const ReactionSchema = new Schema(
    {
        reactionId: {
            id: mongoose.Schema.Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
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

module.exports = ReactionSchema;