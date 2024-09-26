import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    lastCheckin: {
        type: Date,
        default: null
    },
    lastWeeklyCheckin: {
        type: Date,
        default: null
    },
    dailyStreak: {
        type: Number,
        default: 0
    },
    weeklyStreak: {
        type: Number,
        default: 0
    }
});

export default mongoose.model("User", userSchema);
