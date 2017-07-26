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
module.exports.getListOfPosts = (root, {}) => {
  return new Promise((resolve, reject) => {
    Post.find({}).exec((err, res) => {
      console.log(res);
      err ? reject(err) : resolve(res);
    });
  });
};

module.exports.getPostById = (root, {id}) => {
  return new Promise((resolve, reject) => {
    Post.findOne({_id:id}).exec((err, res) => {
      err ? reject(err) : resolve(res);
    })
  });
};

module.exports.addPost = (root, {text}) => {
  var newPost = new Post({text:text});
  return new Promise((resolve, reject) => {
    newPost.save((err, res) => {
      err ? reject(err): resolve(res);
    });
  });
};

module.exports.removePost = (root, {id}) => {
  return new Promise((resolve, reject) => {
    Post.findOne({_id: id}).remove().exec((err, res) => {
      console.log(res);
      err ? reject(err): resolve(res);
    });
  });
};
