import mongoose from "mongoose";

const { Schema,Document } = mongoose;

interface IUser extends Document {
    name: string,
    email: string,
    password: string,
  }

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export default User;
// export default mongoose.model("User", userSchema);