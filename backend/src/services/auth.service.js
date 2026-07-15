import bcrypt from "bcryptjs";
import prisma from "../config/prisma.js";
import ApiError from "../utils/ApiError.js";

export const registerUser = async (userData) => {
    // Destructure incoming data
    const { name, email, password } = userData;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (existingUser) {
        throw new ApiError(409, "Email is already registered.");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    // Remove password before returning response
    const { password: _, ...safeUser } = user;

    return safeUser;
};