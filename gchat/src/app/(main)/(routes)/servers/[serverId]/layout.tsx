import React from "react";
import {NavigationSidebar} from "@/components/navigation/navigation-sidebar";
import {currentProfile} from "@/lib/current-profile";
import {redirect} from "next/navigation";
import {redirectToSignIn} from "@clerk/nextjs";
import {db} from "@/lib/db";
import ServerSidebar from "@/components/server/server-sidebar";

export default async function MainLayout({ children, params }: Readonly<{ children: React.ReactNode; params: { serverId: string } }> ) {
  const profile = await currentProfile();

  if (!profile) return redirectToSignIn();

  const server = await db.server.findUnique({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  });

  if (!server) return redirect("/");

  return (
    <div className={"h-full"}>
      <div className={"hidden md:flex h-full w-60 z-20 flex-col inset-y-0 fixed"} >
        <ServerSidebar serverId={params.serverId} />
      </div>
      <main className={"md:pl-60 h-full"}>
        {children}
      </main>
    </div>
  )
}