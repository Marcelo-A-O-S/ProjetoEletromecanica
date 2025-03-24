import Link from "next/link";
import { Zap } from "lucide-react";
export function MainNav(){
    return(
        <div className="flex items-center gap-6 md:gap-10">
            <Link href={"/"} className="flex items-center space-x-2">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black dark:bg-white">
                    <Zap className="h-8 w-8 text-yellow-400"/>
                </div>
                <span className="hidden font-bold sm:inline-block">
                    Projeto Eletromecânica
                </span>
            </Link>
            <nav className={"flex items-center space-x-6 text-sm font-medium"}>
                <Link 
                href={"/"}
                className="transition-colors hover:text-primary"
                >
                Dashboard
                </Link>
                <Link 
                href={"/configurations"}
                className="transition-colors hover:text-primary"
                >
                Configurações
                </Link>

            </nav>
        </div>
    )
}