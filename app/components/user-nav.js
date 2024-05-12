'use client'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { useRouter } from "next/navigation"
  import { Link } from "next/link"
  import { useContext } from "react"
  import { Context } from "./Context";
  
  export function UserNav() {
    const router = useRouter();
    const {navBarData} = useContext(Context)
    const profilepic=navBarData.profile_picture
    
    const handleLogout = () => {
      localStorage.removeItem("token"); 
      router.push("/auth");
    };
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full bg-transparent hover:bg-transparent border border-solid border-white">
            <Avatar className="h-10 w-10">
              <AvatarImage src={profilepic} alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-black backdrop-blur-md text-white hover:backdrop-blur-sm" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{navBarData.username}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {navBarData.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => router.push(`/profile/${navBarData.id}`)}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              Settings
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }