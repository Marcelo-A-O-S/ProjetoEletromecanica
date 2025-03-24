import { verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("auth-token")?.value;
        if(!token){
            return NextResponse.json(
                {message: "Usuário não autenticado!"},
                {status: 401}
            )
        }
        const user = await verifyToken(token);
        return NextResponse.json({user});
    } catch (error) {
        console.error("Auth check error:", error);
        return NextResponse.json(
            { message: "Invalid or expired token" },
            { status: 401 }
        );
    }
}