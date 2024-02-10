"use client";

import {ServerWithMembersWithProfiles} from "@/types";
import {MemberRole} from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {ChevronDown, PlusCircle, Settings, UserPlus, Users} from "lucide-react";
import {ExitIcon} from "@radix-ui/react-icons";
import {useModal} from "@/hooks/use-modal-store";

interface ServerHeaderProps {
  server: ServerWithMembersWithProfiles;
  role: MemberRole
}

export default function ServerHeader({server, role}: ServerHeaderProps) {
  const { onOpen } = useModal();

  const isOwner = role === MemberRole.OWNER;
  const isAdmin = isOwner || role === MemberRole.ADMIN;
  const isMember = isAdmin || role === MemberRole.MEMBER;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={"focus:outline-none"} asChild>
        <button className={"w-full text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition"}>
          {server.name}
          <ChevronDown className={"h-5 w-5 ml-auto"}/>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={"w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]"}>
        {isAdmin && (
          <DropdownMenuItem className={"px-3 py-2 text-sm cursor-pointer"}>
            Server Settings
            <Settings className={"h-4 w-4 ml-auto"} />
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem className={"px-3 py-2 text-sm cursor-pointer"}>
            Manage Members
            <Users className={"h-4 w-4 ml-auto"} />
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem className={"px-3 py-2 text-sm cursor-pointer"}>
            Create Channel
            <PlusCircle className={"h-4 w-4 ml-auto"} />
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuSeparator />
        )}
        {isMember && (
          <DropdownMenuItem className={"text-indigo-600 dark:text-indigo-400 px-3 py-2 text-sm cursor-pointer"} onClick={() => onOpen("invite", { server })}>
            Invite People
            <UserPlus className={"h-4 w-4 ml-auto"} />
          </DropdownMenuItem>
        )}
        {(
          <DropdownMenuItem className={"text-rose-600 dark:text-rose-500 px-3 py-2 text-sm cursor-pointer"}>
            Leave Server
            <ExitIcon className={"h-4 w-4 ml-auto"} />
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}