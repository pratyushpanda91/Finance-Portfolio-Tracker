import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import prisma from "../config/prisma.js";
import ApiError from "../utils/ApiError.js";

export const registerUser = async (userData) => {
    const { name, email, password } = userData;

    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (existingUser) {
        throw new ApiError(409, "Email is already registered.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    const { password: _, ...safeUser } = user;

    return safeUser;
};

export const loginUser = async (userData) => {
    const { email, password } = userData;

    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (!user) {
        throw new ApiError(401, "Invalid email or password.");
    }

    const isPasswordMatched = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordMatched) {
        throw new ApiError(401, "Invalid email or password.");
    }

    const token = jwt.sign(
        {
            id: user.id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1d",
        }
    );

    const { password: _, ...safeUser } = user;

    return {
        user: safeUser,
        token,
    };
};