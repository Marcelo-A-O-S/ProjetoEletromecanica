import ManageUsersClient from "@/components/pages/manage-user-client"
import { Metadata } from "next"
export const metadata : Metadata = {
    title: "Gerenciamento de Usuários",
    description:"Pagina para gerenciamento de usuários da aplicação"
}
export default async function ManageUsersPage(){
    
    
    return <ManageUsersClient />
}