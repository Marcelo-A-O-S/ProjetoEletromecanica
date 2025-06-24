'use client'
import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
export default function ManageRegistersClient() {

    useEffect(() => {
        loadingData()
    }, [])
    const loadingData = async () => {

    }
    return (
        <>
            <main className="flex-1 mx-auto container py-6">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold">Gerenciamento de Registros</h1>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                        <Button className="flex items-center gap-1 bg-primary hover:bg-primary/90 hover:cursor-pointer">
                            <Plus />
                            Novo
                        </Button>
                    </div>
                </div>
                <table className="table-auto min-w-full text-left text-sm font-light text-surface dark:text-white">
                    <thead className="border-b border-neutral-200 font-medium">
                        <tr>
                            <th scope="col" className="px-6 py-4">Name</th>
                            <th scope="col" className="px-6 py-4">Email</th>
                            <th scope="col" className="px-6 py-4">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b border-neutral-200 dark:border-white/10">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">Teste</td>
                            <td className="whitespace-nowrap px-6 py-4">Teste</td>
                            <td className="whitespace-nowrap px-6 py-4">Teste</td>
                        </tr>
                       
                    </tbody>
                </table>
            </main>
        </>)
}