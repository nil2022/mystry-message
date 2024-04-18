import mongoose, { Schema, Document } from "mongoose";

/** Data types for Message Schema **/
export interface Message extends Document {
    content: string;
    createdAt: Date;
}

/** Message Schema **/
const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

/** Data types for User Schema **/
export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    isAcceptingMessage: boolean;
    messages: Message[];
}

/** User Schema **/
const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,
        unique: true,
        // validate: {
        //     validator: (username: string) => {
        //         return /^[a-zA-Z0-9]+$/.test(username);
        //     },
        //     message: 'Username must only contain letters and numbers'
        // }
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        
    },
    verifyCode: {
        type: String
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, 'Verify code expiry is required'],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAcceptingMessage: {
        type: Boolean,
        default: true
    },
    messages: [MessageSchema]
})

const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema)

export default UserModel;

