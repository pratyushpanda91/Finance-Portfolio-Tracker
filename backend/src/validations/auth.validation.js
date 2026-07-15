import { z } from "zod";

export const registerSchema = z.object({

    name: z
        .string()
        .trim()
        .min(3, "Name should contain at least 3 characters."),

    email: z
        .string()
        .trim()
        .toLowerCase()
        .email("Invalid email address."),

    password: z
        .string()
        .min(6, "Password should contain at least 6 characters.")

});