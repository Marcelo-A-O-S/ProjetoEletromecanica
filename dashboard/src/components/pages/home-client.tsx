'use client'
import { suisse } from "@/fonts/font";
import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react";
import Image from "next/image"
import { TypeAnimation } from "react-type-animation";
interface ITrecho {
    id: number,
    content: string,
    imageUrl?: string | null,
}
const trechos: ITrecho[] = [{
    id: 1,
    content: "Olá, pessoa amável da internet!",
    imageUrl: "https://media.tenor.com/ftqs42Yna-oAAAAj/mochi-mochi-hello-white-mochi-mochi.gif"
},{
    id: 2,
    content: "Esse é um projeto que construímos com muita dedicação!",
    imageUrl: "https://media.tenor.com/KdkhCJ65m0sAAAAj/peach-goma-peach-and-goma.gif"
},
{
  id: 3,
  content: "Combinamos fios, códigos e ideias 💡",
  imageUrl: "https://media1.tenor.com/m/hwOB0xcJ3DwAAAAd/breakup-peach.gif"
},
{
  id: 4,
  content: "Transformamos esforço em inovação! 🔧💡",
  imageUrl: "https://media1.tenor.com/m/u90_8-JTBLUAAAAd/mochi-peach.gif"
},
{
  id: 5,
  content: "A prova de que teoria e prática se unem na medida certa.",
  imageUrl: "https://media.tenor.com/HRngfAzY-fwAAAAj/peach-and.gif"
},
{
  id: 6,
  content: "Esperamos que você goste... e que isso te inspire a sonhar em conquistar grandes coisas também! ✨",
  imageUrl: "https://media.tenor.com/5AsqpbIECbcAAAAj/peach-peach-and-goma.gif"
}]
export function HomeClient() {
    const introRef = useRef<HTMLDivElement>(null);

    const [currentImage, setCurrentImage] = useState<string | null>(null);
    useEffect(() => {
        setTimeout(() => {
            if (introRef.current) {
                introRef.current.classList.add("-translate-y-full");
            }
        }, 40200)
    }, []);

    const sequence = trechos.length > 0
    ? trechos.flatMap((trecho, index) => {
        const items: (string | number | (() => void))[] = [];
        items.push(() => {
            if (trecho.imageUrl) setCurrentImage(trecho.imageUrl);
        });
        items.push(trecho.content);
        items.push(3000);
        return items;
    })
    : [];
    return (
        <main className="flex-1 mx-auto container py-6">
            <div
                ref={introRef}
                id="intro"
                className="fixed z-10 left-0 top-0 w-full h-screen bg-black flex flex-col gap-4 items-center justify-center transition-transform duration-1000 ">
                {currentImage && (
                    <Image
                        src={currentImage}
                        alt="Hello Mochi"
                        className="w-64 h-64 sm:w-96 sm:h-96 animate-pulse"
                        width="50"
                        height="50"
                    />
                )}
                {sequence.length > 0 ? (
                <TypeAnimation
                    sequence={sequence}
                    wrapper="span"
                    cursor={true}
                    
                    className="text-center text-2xl sm:text-4xl font-bold p-4"
                    omitDeletionAnimation={true}
                />
            ) : (
                <p className="text-white text-center text-2xl">Carregando...</p>
            )}
                </div>
                <section className="h-screen flex flex-col justify-center ">
                    <div className="flex flex-col p-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className={`${suisse.className} text-4xl sm:text-6xl lg:text-9xl font-bold`}
                        >
                            Projeto
                        </motion.h1>
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl sm:text-6xl lg:text-9xl font-bold text-primary"
                        >
                            Eletromecânica
                        </motion.h1>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="p-4">
                        <p className="mt-4 text-lg text-muted-foreground max-w-2xl ">Uma iniciativa prática e inovadora desenvolvida pela turma do curso técnico de Eletromecânica da Escola Estadual Professor Gastão Valle.</p>
                    </motion.div>
                </section>

                <section className="h-screen flex flex-col justify-center p-4">
                    <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className={`${suisse.className} text-2xl sm:text-6xl font-semibold mb-4`}>Nosso Objetivo</motion.h2>
                    <motion.p initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-base sm:text-lg text-muted-foreground max-w-3xl ">
                        Criar uma solução real, funcional e aplicada, unindo conhecimentos de mecânica, elétrica e automação para resolver um desafio técnico. O projeto foi idealizado como parte da disciplina de Projetos e reflete o aprendizado técnico adquirido ao longo do curso.
                    </motion.p>
                </section>
        </main >
    )
}