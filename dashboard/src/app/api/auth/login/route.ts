import { autenticateUser, verifyToken } from "@/lib/auth";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email e senha são necessárias para prosseguir" },
        { status: 400 }
      );
    }
    const token = await autenticateUser(email, password);
    if (!token) {
      return NextResponse.json(
        { message: "Credenciais inválidas, corrija e tente novamente!" },
        { status: 401 }
      )
    }
    const cookieStore = await cookies();
    // Set cookie
    cookieStore.set({
      name: "auth-token",
      value: token,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, 
    });
    const user = await verifyToken(token);
    if (!user) {
      return NextResponse.json(
        { message: "Usuário inválido!" },
        { status: 401 }
      )
    }
    return NextResponse.json({ user })

  } catch (err) {
    console.error('Token inválido:', (err as Error).message);
  }
}