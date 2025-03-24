import { registerUser, verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { name, email, password } = await request.json()

        if (!name || !email || !password) {
            return NextResponse.json(
                { message: "Informe as credenciais solicitadas corretamente para prosseguir!" },
                { status: 400 }
            )
        }
        const token = await registerUser(name,email, password);
        if(!token){
            return NextResponse.json(
                {message: "Erro ao registrar o usuário, tente novamente mais tarde!"},
                {status: 409}
            )
        }
        const cookieStore = await cookies(); 
        // Set cookie
        cookieStore.set({
          name: "auth-token",
          value: token,
          httpOnly: true,
          path: "/",
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24, // 1 day
        });

        const user = await verifyToken(token);
        if(!user){
            return NextResponse.json(
                {message:"Usuário inválido!"},
                {status: 401}
            )
        }
        return NextResponse.json({user})
    } catch (err) {
        return NextResponse.json(
            { message: "Problema interno" },
            { status: 500 }
        )
    }
}