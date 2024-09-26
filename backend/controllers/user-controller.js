import User from "../model/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = "MyKey"; // Use this instead of an .env variable
 // Replace with a strong secret key

export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    if (!users) {
        return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json({ users });
}



export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    let existingUser;

    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        return res.status(500).json({ message: "Error checking existing user." });
    }

    if (existingUser) {
        return res.status(400).json({ message: "User already existed!! Login Instead" });
    }

    const hashedPassword = bcrypt.hashSync(password);

    const user = new User({
        name,
        email,
        password: hashedPassword,
        blogs: []
    });

    try {
        await user.save();

        const token = jwt.sign(
            { id: user._id, email: user.email },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.status(201).json({ user, token });
    } catch (err) {
        return res.status(500).json({ message: "Error creating user." });
    }
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;

    let existingUser;

    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        return res.status(500).json({ message: "Error checking existing user." });
    }

    if (!existingUser) {
        return res.status(404).json({ message: "Couldn't find an account with this email" });
    }

    const isValidPassword = bcrypt.compareSync(password, existingUser.password);

    if (!isValidPassword) {
        return res.status(400).json({ message: 'Incorrect Password' });
    }

    const token = jwt.sign(
        { id: existingUser._id, email: existingUser.email },
        JWT_SECRET,
        { expiresIn: '1h' }
    );

    return res.status(200).json({ message: 'Login Successful!!', user: existingUser, token });
}


// JWT secret key

// Daily Check-in Function
export const dailyCheckin = async (req, res, next) => {
    const { userId } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const currentDate = new Date();
        const lastCheckinDate = user.lastCheckin ? new Date(user.lastCheckin) : null;

        if (lastCheckinDate) {
            const timeDifference = currentDate.getTime() - lastCheckinDate.getTime();
            const daysDifference = timeDifference / (1000 * 3600 * 24);

            // If it's the next day, increase streak
            if (daysDifference >= 1 && daysDifference < 2) {
                user.dailyStreak += 1;
            }
            // If more than a day has passed, reset the streak
            else if (daysDifference >= 2) {
                user.dailyStreak = 1; // Reset to 1 because today counts as the first check-in
            }
            // If the user has already checked in today
            else {
                return res.status(200).json({ message: "Already checked in today", dailyStreak: user.dailyStreak });
            }
        } else {
            user.dailyStreak = 1; // First check-in
        }

        user.lastCheckin = currentDate;

        await user.save();
        return res.status(200).json({ message: "Daily check-in successful", dailyStreak: user.dailyStreak, user });
    } catch (err) {
        return res.status(500).json({ message: "An error occurred", error: err });
    }
};

// Weekly Check-in Function
export const weeklyCheckin = async (req, res, next) => {
    const { userId } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const currentDate = new Date();
        const lastWeeklyCheckinDate = user.lastWeeklyCheckin ? new Date(user.lastWeeklyCheckin) : null;

        if (lastWeeklyCheckinDate) {
            const timeDifference = currentDate.getTime() - lastWeeklyCheckinDate.getTime();
            const weeksDifference = timeDifference / (1000 * 3600 * 24 * 7);

            // If it's the next week, increase streak
            if (weeksDifference >= 1 && weeksDifference < 2) {
                user.weeklyStreak += 1;
            }
            // If more than a week has passed, reset the streak
            else if (weeksDifference >= 2) {
                user.weeklyStreak = 1; // Reset to 1 because this counts as the first check-in of the week
            }
            // If the user has already checked in this week
            else {
                return res.status(200).json({ message: "Already checked in this week", weeklyStreak: user.weeklyStreak });
            }
        } else {
            user.weeklyStreak = 1; // First weekly check-in
        }

        user.lastWeeklyCheckin = currentDate;

        await user.save();
        return res.status(200).json({ message: "Weekly check-in successful", weeklyStreak: user.weeklyStreak, user });
    } catch (err) {
        return res.status(500).json({ message: "An error occurred", error: err });
    }
};
