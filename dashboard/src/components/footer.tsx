import { Github, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='mx-auto p-4 border-t'>
            <div className='flex w-full items-center justify-center'>
                <Link href={"/"} className="flex h-full items-center p-4 space-x-2">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-black dark:bg-white">
                        <Zap className="h-8 w-8 text-yellow-400" />
                    </div>
                    <span className=" font-bold sm:inline-block">
                        Projeto Eletromecânica
                    </span>
                </Link>
            </div>
            <div className='flex w-full items-center justify-center'>
                <ul className='flex'>
                    <Link href={""}>
                        <div>
                            <Github/>
                        </div>
                    </Link>
                </ul>
            </div>
            <div className="flex flex-col items-center w-full justify-center pt-5 pb-10">
                <p className="text-sm text-center ">© Copyright 2025 Projeto Eletromecânica. Todos os direitos reservados.</p>
                <p className="text-sm text-center ">Desenvolvido com carinho pelos alunos da Escola Estadual Professor Gastão Valle.</p>
            </div>
        </footer>
    )
}