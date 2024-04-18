import {z} from "zod";

// signin schema validation using zod
export const signInSchema = z.object({
    identifier: z.string(),
    password: z.string(),
})