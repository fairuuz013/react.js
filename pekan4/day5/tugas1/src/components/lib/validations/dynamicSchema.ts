import { z } from "zod"

export const dynamicFormSchema = z.object({
    hobbies: z
        .array(
            z.object({
                name: z.string().min(1, "Hobi ngga boleh kosong boy"),

            })
        )
        .min(1, "Minimal isi satu hobi ke ")
})

export type DynamicFormType = z.infer<typeof dynamicFormSchema>