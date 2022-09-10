const mongoose = require('mongoose');
const PostsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});
const PostModel = mongoose.model("users", PostsSchema);
module.exports = PostModel;