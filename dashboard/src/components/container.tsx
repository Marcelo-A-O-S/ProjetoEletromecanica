import { ReactNode } from "react"
import { ThemeProjectProvider } from "../context/theme-provider"
import { AuthProvider } from "@/context/auth-context"
import Header from "./header"
import Footer from "./footer"
type ContainerProps = {
    children: ReactNode
}
export default function Container({ children }: ContainerProps) {
    return (
        <>
            <ThemeProjectProvider
                attribute="class"
                defaultTheme="dark"
            >
                <AuthProvider>
                    <Header />
                    {children}
                    <Footer/>
                </AuthProvider>
            </ThemeProjectProvider>
        </>)
}