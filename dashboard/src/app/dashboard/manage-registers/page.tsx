import ManageRegistersClient from "@/components/pages/manage-registers-client"
import { Metadata } from "next"
export const metadata : Metadata = {
    title: "Gerenciamento de Registros",
    description:"Pagina para gerenciamento de links de autorização de registro"
}
export default async function ManageRegistersPage(){
    
    
    return <ManageRegistersClient />
}