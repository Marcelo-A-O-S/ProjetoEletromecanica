"use client"
import { useAuth } from "@/context/auth-context"
import { MainNav } from "./main-nav";
import { UserNav } from "./user-nav";
export default function Header(){
    const {user} = useAuth();
    return user ?(
        <header className=" w-full border-b bg-background">
            <div className="container mx-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <MainNav/>
                <div className="flex flex-1 items-center justify-end">
                    <nav className="flex items-center space-x-2">
                        <UserNav/>
                    </nav>
                </div>
            </div>
        </header>
    ): (<>
    <header className="w-full mx-auto bg-transparent">
        <div className="container  mx-auto flex items-center space-x-4 sm:justify-between sm:space-x-0">
            <MainNav/>
        </div>
    </header>
    </>)
}