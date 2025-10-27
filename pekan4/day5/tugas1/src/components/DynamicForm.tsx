import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { dynamicFormSchema, type DynamicFormType } from "@/components/lib/validations/dynamicSchema";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "@/components/ui/card";


export default function DynamicFormType() {
    const { register, control, handleSubmit } = useForm<DynamicFormType>({
        resolver: zodResolver(dynamicFormSchema),
        defaultValues: {
            hobbies: [{ name: "" }],
        },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "hobbies",
    })

    const onSubmit = (data: DynamicFormType) => {
        console.log("Data submit:", data);
    };



    return (
        <Card className="p-6 space-y-4">
            <h2 className="text-lg font-semibold">Dynamic Form: Daftar Hobi</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                {fields.map((field, index) => (
                    <div key={field.id} className="flex items-center gap-2">
                        <Input
                            {...register(`hobbies.${index}.name`)}
                            placeholder={`Hobi ke-${index + 1}`}
                        />
                        <Button
                            type="button"
                            variant="destructive"
                            onClick={() => remove(index)}
                        >
                            Hapus
                        </Button>
                    </div>
                ))}

                <Button
                    type="button"
                    onClick={() => append({ name: "" })}
                    variant="secondary"
                >
                    + Tambah Hobi
                </Button>

                <Button type="submit" className="w-full">
                    Submit
                </Button>
            </form>
        </Card>
    );
}
