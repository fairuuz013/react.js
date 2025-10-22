import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function Profile() {
    const [name, setName] = useState("");
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        if (name.trim() === "") return;
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-background text-foreground transition-colors duration-300">
            <Card className="w-[360px] shadow-md">
                <CardHeader>
                    <CardTitle>This is My Profile</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                    <Input
                        placeholder="Nama lu siapa bro"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Button onClick={handleSave} className="w-full">
                        Simpen aja bro aman
                    </Button>

                    {saved && (
                        <Alert>
                            <AlertTitle>Yoss Udah Berhasil</AlertTitle>
                            <AlertDescription>Nama lu udah disimpen coy</AlertDescription>
                        </Alert>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
