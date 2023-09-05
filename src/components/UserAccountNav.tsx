'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

import { Button } from "./ui/button";
import Link from "next/link";
import { LogOut } from "lucide-react";
import React from "react";
import { User } from "next-auth";
import UserAvatar from "./UserAvatar";
import { signOut } from "next-auth/react";

type Props = {
    user: Pick<User, "name" | "image" | "email">
};

const UserAccountNav = ({ user }: Props) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            {/* user avatar  */}
            <UserAvatar user={user} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                    {user.name && <p className="font-medium">{user.name}</p>}
                    {user.email && (
                        <p className="w-[200px] truncate text-sm text-zinc-700">
                            {user.email}
                        </p>
                    )}
                </div>  
            </div>

            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
                <Link href="/">
                    Meow
                </Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-800 cursor-pointer" onClick={(e) => {
                e.preventDefault()
                signOut().catch(console.error)
            }}>
                Sign Out
                <LogOut className="w-4 h-4 ml-2" />
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
