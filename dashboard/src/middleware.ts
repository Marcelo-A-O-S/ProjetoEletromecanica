import { NextRequest, NextResponse } from 'next/server';
const pathPublics = [
    "/auth/login",
    "/auth/register",
    "/api/auth/login",
    "/api/auth/register"
]
export default async function middleware(request: NextRequest){
    const {pathname} = request.nextUrl;
    if(pathPublics.some((path)=> pathname.startsWith(path))){
        return NextResponse.next();
    }
    const token = request.cookies.get("auth-token")?.value;
    if(!token){
        const url = new URL("/auth/login", request.url);
        url.searchParams.set("from",pathname);
        return NextResponse.redirect(url);
    }
}

export const config = {
    matcher: [
      "/((?!_next/static|_next/image|favicon.ico|images).*)",
    ],
  };