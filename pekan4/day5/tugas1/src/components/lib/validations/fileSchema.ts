import { z } from "zod"

export const fileSchema = z.object({
    avatar: z
        .instanceof(File)
        .refine((file) => file.size <= 2 * 1024 * 1024, "Ukuran file maksimal 2MB")
        .refine(
            (file) => ["image/png", "image/jpeg"].includes(file.type),
            "File harus PNG atau JPG"
        ),
});



export type FileSchemaType = z.infer<typeof fileSchema>;