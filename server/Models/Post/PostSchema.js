//PostSchema.js
import mongoose from 'mongoose';

let PostSchema = new mongoose.Schema({
  id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
  text: { type:String, required:true },
  created: {type: Date, default: Date.now},
  type: String,
});

PostSchema.set('toJSON', { getters: true });

let Post = mongoose.model('Post', PostSchema);

module.exports = Post;

// A-V-R auth-validation-resolution- ¿ofuscation?
module.exports.getListOfPosts = (root, {}) => Post.find({}).exec();
module.exports.getPostById = (root, {id}) => Post.findOne({_id:id}).exec();
module.exports.addPost = (root, {text}) => new Post({ text }).save();
module.exports.removePost = (root, {id}) => Post.findOne({_id: id}).remove().exec();
