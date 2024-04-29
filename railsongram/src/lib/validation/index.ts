import * as z from "zod";

export const signUpSchema = z.object({
  name: z.string().min(2, {
    message: "Too short",
  }),
  username: z
    .string()
    .min(2, {
      message: "Too short",
    })
    .max(20),
  email: z.string().email(),
  password: z.string().min(8, { message: "Too short" }),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "Too short" }),
});
