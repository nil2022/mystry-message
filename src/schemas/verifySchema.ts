import {z} from "zod";

// verification code validation using zod
export const verifySchema = z.object({
    code: z.string().length(6, "Verification Code must be 6 digits")
})