"use client"
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Zap } from "lucide-react"
import Link from "next/link";
import { z } from "zod";
import { useAuth } from "@/context/auth-context";
import { useState } from "react";
import { useRouter } from "next/navigation";
const loginSchema = z.object({
    email: z.string().email("Informe um endereço de email válido!"),
    password: z.string().min(6, { message: "A senha necessita ter no minimo 6 caracteres!" })
})
type LoginFormValues = z.infer<typeof loginSchema>
export default function LoginPage() {
    const auth = useAuth();
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<LoginFormValues>({
        email: '',
        password: ''
    })
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const result = await loginSchema.safeParseAsync(formData);
            if (result.error) {
                console.error("Erro ao tentar acessar: ", result.error.message);
                return;
            }
            const { email, password } = result.data;
            setIsLoading(true);
            const sucess = await auth?.login(email, password);
            setIsLoading(false);
            if (sucess) {
                router.push("/dashboard");
            }
        } catch (err) {
            console.error("Erro ao aceessar", err);
        }
    }
    return (<>
        <div className="min-h-screen flex items-center justify-center bg-background ">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <div className="flex justify-center mb-4">
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-black dark:bg-white">
                            <Zap className="h-8 w-8 text-yellow-400" />
                        </div>
                    </div>
                    <CardTitle className="font-bold text-center text-2xl">Login</CardTitle>
                    <CardDescription className="text-center">Insira suas credenciais para acessar sua conta</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm" htmlFor="Email">Email</label>
                            <Input
                                type="email"
                                className="w-full"
                                placeholder="example@email.com"
                                onChange={(e) => setFormData((prev) => {
                                    return {
                                        ...prev,
                                        email: e.target.value
                                    }
                                })}
                            />
                            <label className="text-sm" htmlFor="Email">Password</label>
                            <Input
                                type="password"
                                className="w-full"
                                placeholder="••••••••"
                                onChange={(e) => setFormData((prev) => {
                                    return {
                                        ...prev,
                                        password: e.target.value
                                    }
                                })}
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className="w-full text-sm bg-primary hover:cursor-pointer"
                        >
                            {isLoading?"Acessando sua conta...":"Acessar"}
                        </Button>
                        

                    </CardFooter>
                </form>
            </Card>
        </div>
    </>)
}