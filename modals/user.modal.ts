import {Schema, model, models} from "mongoose";

export const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email : {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
      required: true,
  },
  lastName: {
    type: String,
    required: true,

  },  
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    required: true,
  },

});

const User = models.User || model("User", UserSchema);

export default User;