import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String
    },

    cartData:{
        type:Object,
        // Here, cartData can hold any object — the keys and values 
        // can be whatever you want (numbers, strings, nested objects, etc
        default:{}
    }
},{timestamps:true , minimize:false})

const User = mongoose.model("User",userSchema)

export default User



// timestamps: true
// Automatically adds two fields:
// createdAt → when the document was created.
// updatedAt → when the document was last updated.
// minimize: false
// Normally, Mongoose removes empty objects to save space.
// Setting this to false keeps empty objects in the database.
// This ensures cartData: {} will be saved instead of disappearing.


// Creating the Model
// const User = mongoose.model("User", userSchema)
// A model is like a class for documents in MongoDB.
// "User" → name of the model (will be stored as "users" collection in MongoDB).
// userSchema → the schema to follow for each document.