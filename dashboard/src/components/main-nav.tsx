'use client'
import Link from "next/link";
import { User, Zap } from "lucide-react";
import { useAuth } from "@/context/auth-context";
import { Menu } from "lucide-react";
import { useState } from "react";
import { House } from "lucide-react";
import { Users } from "lucide-react";
import { Wrench } from "lucide-react";
import { LockOpen } from "lucide-react";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
export function MainNav() {
    const {theme, setTheme} = useTheme()
    const { user } = useAuth()
    const [openDropdown, setOpenDropdown] = useState(false)
    return user ? (
        <div className="flex items-center gap-6 md:gap-10">
            <Link href={"/"} className="flex items-center space-x-2">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black dark:bg-white">
                    <Zap className="h-8 w-8 text-yellow-400" />
                </div>
                <span className="hidden font-bold sm:inline-block">
                    Projeto Eletromecânica
                </span>
            </Link>
            <nav className={"flex items-center space-x-6 text-sm font-medium"}>
                <Link
                    href={"/dashboard"}
                    className="transition-colors hover:text-primary"
                >
                    Dashboard
                </Link>
                <Link
                    href={"/dashboard/configurations"}
                    className="transition-colors hover:text-primary"
                >
                    Configurações
                </Link>

            </nav>
        </div>
    ) : (
        <>
            <div className="flex flex-col  w-full ">
                <div className="flex items-center w-full p-2 justify-between  sm:items-center sm:justify-between gap-6 md:gap-10">
                    <Link href={"/"} className="flex h-full items-center p-4 space-x-2">
                        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black dark:bg-white">
                            <Zap className="h-8 w-8 text-yellow-400" />
                        </div>
                        <span className=" font-bold sm:inline-block">
                            Projeto Eletromecânica
                        </span>
                    </Link>

                    <nav className={"hidden sm:flex items-center space-x-6 text-sm font-medium"}>
                        <Link
                            href={"/"}
                            className="transition-colors flex items-center gap-2  hover:text-primary"
                        >
                           <House /> Início
                        </Link>
                        <Link
                            href={"/about"}
                            className="transition-colors flex items-center gap-2  hover:text-primary"
                        >
                           <Users /> Quem somos
                        </Link>
                        <Link
                            href={"/project"}
                            className="transition-colors flex items-center gap-2  hover:text-primary"
                        >
                           <Wrench/> Projeto
                        </Link>
                        <Link
                            href={"/auth/login"}
                            className="transition-colors flex items-center gap-2  hover:text-primary"
                        >
                           <LockOpen/> Login
                        </Link>
                    </nav>
                    <div onClick={()=>theme=="dark"?setTheme('light'):setTheme('dark')} className="border rounded-xl p-2 cursor-pointer">
                        {theme == "dark"?<Sun/>:<Moon/>}
                    </div>
                    <Menu onClick={() => setOpenDropdown(!openDropdown)} className="flex sm:hidden" />
                </div>
                <div className={`${openDropdown ? '' : 'hidden'} flex flex-col p-4 w-full sm:hidden`}>
                    <Link
                        href={"/"}
                        className="transition-colors flex items-center gap-2  hover:text-primary"
                        onClick={() => setOpenDropdown(false)}
                    >
                       <House/> Início
                    </Link>
                    <Link
                        href={"/about"}
                        className="transition-colors flex items-center gap-2  hover:text-primary"
                        onClick={() => setOpenDropdown(false)}
                    >
                       <Users/> Quem somos
                    </Link>
                    <Link
                        href={"/project"}
                        className="transition-colors flex items-center gap-2  hover:text-primary"
                        onClick={() => setOpenDropdown(false)}
                    >
                        <Wrench/> Projeto
                    </Link>
                    <Link
                        href={"/auth/login"}
                        className="transition-colors flex items-center gap-2  hover:text-primary"
                        onClick={() => setOpenDropdown(false)}
                    >
                       <LockOpen /> Login
                    </Link>
                </div>
            </div>

        </>)
}