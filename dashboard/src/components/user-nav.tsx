"use client"
import { useAuth } from "@/context/auth-context";
import Link from "next/link";
import { useState } from "react";

export function UserNav() {
    const { user, logout } = useAuth();
    const [ openDropdown , setOpenDropdown] =useState(false);
    const LogoutClick = () =>{
        logout();
    }
    return (
        <div className="relative border-b-4 border-transparent py-1">
            <div className="flex justify-center items-center space-x-3 cursor-pointer">
                <div onClick={()=>setOpenDropdown(!openDropdown)} className="w-10 h-10 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                    <div className="flex h-full items-center justify-center">{user?.name?.[0] || "U"}</div>
                </div>
            </div>
            <div className={`${openDropdown?"":"hidden"} absolute w-30 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-5`}>
                <ul className="space-y-3 dark:text-white">
                    <li className="text-sm">
                        <Link
                        href={""}
                        >
                            Account
                        </Link>
                    </li>
                    <li className="text-sm">
                        <button
                            className=""
                            onClick={LogoutClick}
                        >
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}