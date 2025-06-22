'use client'
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
export default function ToggleTheme() {
    const {theme, setTheme} = useTheme()
    return (
        <>
            <div onClick={() => theme == "dark" ? setTheme('light') : setTheme('dark')} className="border rounded-xl p-2 cursor-pointer">
                {theme == "dark" ? <Sun /> : <Moon />}
            </div>
        </>)
}