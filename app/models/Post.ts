import mongoose from "mongoose";
 
const { Schema,Document } = mongoose

interface IPost extends Document {
    title: string,
    desc: string,
    img: string,
    content: string,
    username: string,
  }

const postSchema = new Schema<IPost>(
    {
    title: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require : true,
    },
    img: {
        type: String,
        require: true,
    },
    content: {
         type: String,
         require: true,
        },
     username: {
        type: String
    }
    },
    {timestamps:true}
)

const Post = mongoose.models.Post || mongoose.model<IPost>("Post", postSchema);
export default Post;
// export default mongoose.model("Post", postSchema);