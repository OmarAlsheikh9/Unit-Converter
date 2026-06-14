import { z } from "zod";
import { units } from "../units.js";
export const lengthSchema = z.object({
  value: z.number().positive(),
  from: z.string().refine((val) => units.length.toBase.hasOwnProperty(val), {
    message: "Invalid 'from' unit",
  }),
  to: z.string().refine((val) => units.length.toBase.hasOwnProperty(val), {
    message: "Invalid 'to' unit",
  }),
});
export const weightSchema = z.object({
  value: z.number().positive(),
  from: z.string().refine((val) => units.weight.toBase.hasOwnProperty(val), {
    message: "Invalid 'from' unit",
  }),
  to: z.string().refine((val) => units.weight.toBase.hasOwnProperty(val), {
    message: "Invalid 'to' unit",
  }),
});
export const tempSchema = z.object({
  value: z.number(),
  from: z.string().refine(
    (val) => units.temperature.toBase.hasOwnProperty(val),
    {
      message: "Invalid 'from' unit",
    }
  ),
  to: z.string().refine((val) => units.temperature.toBase.hasOwnProperty(val), {
    message: "Invalid 'to' unit",
  }),
});