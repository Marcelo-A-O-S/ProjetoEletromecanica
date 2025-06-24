'use client'
import { User } from "@/domain/models/User"
import { useEffect, useState } from "react"
import { getUsersServices } from "@/services/users-services"
import { Button } from "../ui/button"
export default function ManageUsersClient() {
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        loadingData()
    }, [])
    const loadingData = async () => {
        const { data } = await getUsersServices();
        console.log(data);
        setUsers(data);
    }
    return (
        <>
            <main className="flex-1 mx-auto container py-6 ">
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-3xl font-bold">Gerenciamento de Usuários</h1>
                    </div>
                    <div className="flex items-center justify-end gap-2 p-4">
                        <Button className="flex items-center gap-1 bg-primary hover:bg-primary/90 hover:cursor-pointer">
                            Gerenciamento de registro
                        </Button>
                    </div>
                </div>
                <table className="table-auto min-w-full text-left text-sm font-light text-surface p-4">
                    <thead className="border-b border-neutral-200 font-medium ">
                        <tr>
                            <th scope="col" className="px-6 py-4">Name</th>
                            <th scope="col" className="px-6 py-4">Email</th>
                            <th scope="col" className="px-6 py-4">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr className="border-b border-neutral-200 ">
                                <td className="whitespace-nowrap px-6 py-4 font-medium">{user.name}</td>
                                <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                                <td className="whitespace-nowrap px-6 py-4">{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </>)
}