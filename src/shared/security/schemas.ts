import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve conter pelo menos 2 caracteres" })
    .max(100, { message: "O nome deve conter no máximo 100 caracteres" })
    .trim(),
  email: z
    .string()
    .email({ message: "Endereço de e-mail inválido" })
    .max(120, { message: "O e-mail deve conter no máximo 120 caracteres" })
    .trim(),
  subject: z
    .string()
    .min(3, { message: "O assunto deve conter pelo menos 3 caracteres" })
    .max(150, { message: "O assunto deve conter no máximo 150 caracteres" })
    .trim(),
  message: z
    .string()
    .min(20, { message: "A mensagem deve conter pelo menos 20 caracteres" })
    .max(3000, { message: "A mensagem deve conter no máximo 3000 caracteres" })
    .trim(),
  // Honeypot invisível para bots
  _gotcha: z.string().max(0, { message: "Bot detectado" }).optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
