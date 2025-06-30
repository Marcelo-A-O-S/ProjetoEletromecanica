'use client'
import { suisse } from "@/fonts/font";
import { motion } from "motion/react";
import Image from "next/image";
import Me from "../../assets/Foto minha.png"
import Dan from "../../assets/Dan.png"
import Janaina from "../../assets/Janaina Silva.png"
import Joao from "../../assets/Joao Pedro.png"
import Deidy from "../../assets/Deidilene Goncalves.png"
import Andre from "../../assets/Andre Gustavo.png"
import Augusto from "../../assets/Augusto Duarte.png"
import Tigrao from "../../assets/Tigrao.png"
import Miranha from "../../assets/Matheus.png"
import Fotografo from "../../assets/Michael Pereira.png"
import Miguel from "../../assets/Miguel.png"
import Priscila from "../../assets/Priscila.png"
import Pablo from "../../assets/Pablo.png"
export default function AboutClient() {
    return (<main className="container mx-auto py-12 px-4">
        <section className="max-w-3xl h-screen  flex flex-col justify-center mx-auto text-center">
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`${suisse.className} text-4xl sm:text-6xl font-bold mb-4`}
            >
                Quem somos?
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                className="text-muted-foreground text-lg mb-8"
            >
                Somos alunos do curso técnico em Eletromecânica da Escola Estadual Professor Gastão Valle. Este projeto é fruto do nosso aprendizado, esforço em equipe e paixão por inovação tecnológica aplicada à prática.
            </motion.p>

        </section>
        <section className="mt-16 max-w-3xl h-screen mx-auto text-center">
            <motion.h2
                initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                className={`${suisse.className} text-4xl sm:text-6xl font-semibold mb-4`}
            >
                Nossa missão
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                className="text-base sm:text-lg text-muted-foreground"
            >
                Buscamos aplicar de forma prática os conhecimentos adquiridos ao longo do curso técnico de Eletromecânica, desenvolvendo um projeto que integre mecânica, elétrica e automação para resolver desafios reais com criatividade e eficiência.
            </motion.p>

        </section>
        <section className="flex flex-col">
            <div className="flex items-center w-full justify-center">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
                    className={`${suisse.className} text-4xl sm:text-6xl font-semibold mb-4`}
                >
                    Membros
                </motion.h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-2 mt-12">
                <div className="flex flex-col items-center p-4 rounded-xl border bg-card shadow-md">
                    <Image src={Me} alt="Marcelo Augusto" className="w-24 h-24 rounded-full object-cover bg-gray-200 mb-4" />
                    <h3 className="font-semibold text-lg">Marcelo Augusto</h3>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl border bg-card shadow-md">
                    <Image src={Dan} alt="Daniel Geraldo" className="w-24 h-24 rounded-full object-cover bg-gray-200 mb-4" />
                    <h3 className="font-semibold text-lg">Daniel Geraldo</h3>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl border bg-card shadow-md">
                    <div className="w-24 h-24 rounded-full object-cover bg-gray-200 mb-4" />
                    <h3 className="font-semibold text-lg">Vitor Gabriel</h3>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl border bg-card shadow-md">
                    <Image src={Janaina} alt="Janaina Silva" className="w-24 h-24 rounded-full object-cover bg-gray-200 mb-4" />
                    <h3 className="font-semibold text-lg">Janaina Silva</h3>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl border bg-card shadow-md">
                    <Image src={Joao} alt="Joao Pedro" className="w-24 h-24 rounded-full object-cover bg-gray-200 mb-4" />
                    <h3 className="font-semibold text-lg">Joao Pedro</h3>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl border bg-card shadow-md">
                    <Image src={Deidy} alt="Deidilene Goncalves" className="w-24 h-24 rounded-full object-cover bg-gray-200 mb-4" />
                    <h3 className="font-semibold text-lg">Deidilene Goncalves</h3>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl border bg-card shadow-md">
                    <Image src={Andre} alt="Andre Gustavo" className="w-24 h-24 rounded-full object-cover bg-gray-200 mb-4" />
                    <h3 className="font-semibold text-lg">Andre Gustavo</h3>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl border bg-card shadow-md">
                    <Image src={Augusto} alt="Augusto Duarte" className="w-24 h-24 rounded-full object-cover bg-gray-200 mb-4" />
                    <h3 className="font-semibold text-lg">Augusto Duarte</h3>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl border bg-card shadow-md">
                    <Image src={Tigrao} alt="Paulo Ricardo" className="w-24 h-24 rounded-full object-cover bg-gray-200 mb-4" />
                    <h3 className="font-semibold text-lg">Paulo Ricardo</h3>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl border bg-card shadow-md">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
                    <h3 className="font-semibold text-lg">Joao Pedro Duarte</h3>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl border bg-card shadow-md">
                    <Image src={Priscila} alt="Priscila Araujo" className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
                    <h3 className="font-semibold text-lg">Priscila Araujo</h3>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl border bg-card shadow-md">
                    <Image src={Pablo} alt="Pablo Rogerio" className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
                    <h3 className="font-semibold text-lg">Pablo Rogerio</h3>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl border bg-card shadow-md">
                    <Image src={Miguel} alt="Miguel Angelo" className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
                    <h3 className="font-semibold text-lg">Miguel Angelo</h3>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl border bg-card shadow-md">
                    <div className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
                    <h3 className="font-semibold text-lg">Luis Felipe Benevides</h3>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl border bg-card shadow-md">
                    <Image src={Miranha} alt="Matheus Soares" className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
                    <h3 className="font-semibold text-lg">Matheus Soares</h3>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl border bg-card shadow-md">
                    <Image src={Fotografo} alt="Michael Pereira" className="w-24 h-24 rounded-full bg-gray-200 mb-4" />
                    <h3 className="font-semibold text-lg">Michael Pereira</h3>
                </div>
            </div>
        </section>


    </main>)
}