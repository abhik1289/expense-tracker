import z from "zod";

export const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  icon: z.string().optional(),
  type: z.enum(["income", "expense"]),
  color: z.string().optional(),
});
