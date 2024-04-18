import {z} from "zod";

// accept message schema validation using zod
export const acceptMessageSchema = z.object({
    acceptMessages: z.boolean(),
})