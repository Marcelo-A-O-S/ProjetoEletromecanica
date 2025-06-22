'use client'
import { User } from "@/domain/models/User"
import { useEffect, useState } from "react"
import { getUsersServices } from "@/services/users-services"
export default function ManageUsersClient() {
    const [users, setUsers] = useState<User[]>([])
    useEffect(()=>{
        loadingData()
    }, [])
    const loadingData = async () =>{
        const {data} = await getUsersServices();
        console.log(data);
        setUsers(data);
    }
    return (
        <>
            <main className="container mx-auto">
                <section>
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </>)
}