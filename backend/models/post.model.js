import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50
    },
    description: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 200
    },
    age: {
        type: int,
        required: true,
        minLength: 5,
        maxLength: 50
    }
},{
    timestamps: true
}) 
