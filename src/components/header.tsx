"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogInIcon, LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { poppins } from "@/app/layout";

function DropDownMenu() {
  const session = useSession();

  const isLoggedIn = !!session.data;

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"link"}>
            <Avatar className="mr-2">
              <AvatarImage src={session.data?.user?.image ?? ""} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {session.data?.user?.name} ↓
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {isLoggedIn ? (
            <DropdownMenuItem onClick={() => signOut()}>
              <LogOutIcon className="mr-2" /> Sign Out
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem onClick={() => signIn("google")}>
              <LogInIcon className="mr-2" /> Sign In
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export const Header = () => {
  const session = useSession();

  return (
    <header className="container mx-auto bg-gray-100 py-4 dark:bg-gray-800">
      <div className="flex justify-between items-center">
        <div>Coder Pair</div>

        <div className="flex gap-4 items-center">
          <div>
            <DropDownMenu />
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
