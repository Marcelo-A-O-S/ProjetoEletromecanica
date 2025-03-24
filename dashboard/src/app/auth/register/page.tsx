"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Zap } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
const registerSchema = z.object({
    name: z.string(),
    email: z.string().email("Informe um email válido!"),
    password: z.string().min(6, { message: "A Senha precisa ter pelo menos 6 caracteres!" }),
    confirmPassword: z.string().min(6, { message: "A Senha precisa ter pelo menos 6 caracteres!" })
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});
type RegisterFormValues = z.infer<typeof registerSchema>
export default function RegisterPage() {
    const auth = useAuth();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState<RegisterFormValues>({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const result = await registerSchema.safeParseAsync(formData);
            if (result.error) {
                console.error("Erro ao realizar registro:", result.error.message)
                return;
            }
            const { email, name, password } = result.data;
            setIsLoading(true);
            const success = await auth?.register(name, email, password);
            setIsLoading(false);
            if(success){
                router.push("/");
            }
        }catch(err){
            console.log("Erro: ", err);
        }
    }
    return (<>
        <div className="min-h-screen flex items-center justify-center bg-background">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <div className="flex justify-center mb-4">
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-black dark:bg-white">
                            <Zap className=" h-8 w-8 text-yellow-400" />
                        </div>
                    </div>
                    <CardTitle className="text-center text-2xl font-bold">Registre</CardTitle>
                    <CardDescription className="text-center">Registre suas credenciais para prosseguir:</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm">Nome</label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Insira seu nome..."
                                value={formData.name}
                                onChange={(e) => setFormData((prev) => {
                                    return {
                                        ...prev,
                                        name: e.target.value
                                    }
                                })}
                            />
                            <label className="text-sm">Email</label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                placeholder="Insira seu email..."
                                onChange={(e) => setFormData((prev) => {
                                    return {
                                        ...prev,
                                        email: e.target.value
                                    }
                                })}
                            />
                            <label className="text-sm">Senha</label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                placeholder="Insira sua senha..."
                                onChange={(e) => setFormData((prev) => {
                                    return {
                                        ...prev,
                                        password: e.target.value
                                    }
                                })}
                            />
                            <label className="text-sm">Confirmar Senha</label>
                            <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                placeholder="Repita a senha..."
                                onChange={(e) => setFormData((prev) => {
                                    return {
                                        ...prev,
                                        confirmPassword: e.target.value
                                    }
                                })}
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className="w-full bg-primary hover:cursor-pointer"
                        >
                            {isLoading? "Criando conta...":"Registre-se"}
                        </Button>
                        <div className="flex text-sm w-full items-center justify-center p-3 gap-1">
                            <p className="">
                                Você já tem uma conta?
                            </p>
                            <Link className=" hover:text-yellow-400" href={"/auth/login"}>
                                Acessar
                            </Link>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </div>
    </>)
}