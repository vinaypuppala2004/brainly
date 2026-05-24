import mongoose, {model, Schema} from "mongoose";
import { NewLineKind } from "typescript";

mongoose.connect("mongodb://127.0.0.1:27017/second_brain");

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

const contentSchema = new Schema({
    title : String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Types.ObjectId, ref: 'user'}
})

const tagSchema = new Schema({
    title: {type: String, unique: true},
    
})
export const contentModel = model("content", contentSchema)

export const UserModel = model("user", UserSchema);

export const tagModel = model("tags", tagSchema);