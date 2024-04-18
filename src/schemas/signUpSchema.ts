import {z} from "zod";

// username validation using zod
export const usernameValidation = z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be less than 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must only contain letters and numbers");

// signup schema validation using zod
export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({ message: "Invalid email" }),
    password: z.string().min(6, "Password must be at least 6 characters"),
})