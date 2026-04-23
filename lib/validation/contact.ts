import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  phone: z
    .string()
    .trim()
    .min(6, "Phone number is too short.")
    .max(20, "Phone number is too long.")
    .regex(/^[0-9+\-()]+$/, "Only digits and - + ( ) are allowed."),
  email: z.string().trim().email("Enter a valid email."),
  message: z.string().trim().min(10, "Message must be at least 10 characters."),
})

export type ContactInput = z.infer<typeof contactSchema>
