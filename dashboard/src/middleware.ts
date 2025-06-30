import { NextRequest, NextResponse } from 'next/server';
import { parseJWT } from './utils/parse-jwt';
const pathPublics = [
    "/auth/login",
    "/auth/register",
    "/api/auth/login",
    "/api/auth/register",
    "/",
    "/about",
    "/project"
]
const pathAdmin = [
    "/dashboard/manage-users"
];
const protectedRoutes = [
    '/auth',
    '/auth/login',
    '/auth/register',
    '/dashboard',
    '/dashboard/configurations',
    '/api',
];
const isProduction = process.env.NODE_ENV === 'production'
export default async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const isProtected = protectedRoutes.some((route) =>
        pathname.startsWith(route)
    )
    if (isProduction && isProtected) {
        return NextResponse.redirect(new URL('/', request.url))
    }
    if (pathPublics.some((path) => pathname.startsWith(path))) {
        return NextResponse.next();
    }
    const token = request.cookies.get("auth-token")?.value;
    if (!token) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    const user = token ? parseJWT(token) : null;
    if (!user) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }
    if (pathAdmin.some((adminPath) => pathname.startsWith(adminPath))) {
        if (user.role !== "admin") {
            return NextResponse.redirect(new URL("/dashboard", request.url));
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|images).*)",
    ],
};