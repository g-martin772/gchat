import {currentProfile} from "@/lib/current-profile";
import {redirect} from "next/navigation";
import {db} from "@/lib/db";
import {Channel, ChannelType, Member} from "@prisma/client";
import ServerHeader from "@/components/server/server-header";

interface ServerSidebarProps {
  serverId: string;
}

export default async function ServerSidebar({ serverId }: ServerSidebarProps) {
  const profile = await currentProfile();

  if (!profile) return redirect("/");

  const server = await db.server.findUnique({
    where: {
      id: serverId,
      members: {
        some: {
          profileId: profile.id
        }
      }
    },
    include: {
      channels: {
        orderBy: {
          createdAt: "asc"
        }
      },
      members: {
        include: {
          profile:{

          }
        },
        orderBy: {
          role: "asc"
        }
      }
    }
  });

  if (!server) return redirect("/");

  const textChannels = server?.channels.filter((channel: Channel) => channel.type === ChannelType.TEXT);
  const voiceChannels = server?.channels.filter((channel: Channel) => channel.type === ChannelType.VOICE);
  const videoChannels = server?.channels.filter((channel: Channel) => channel.type === ChannelType.VIDEO);
  const forumChannels = server?.channels.filter((channel: Channel) => channel.type === ChannelType.FORUM);
  const stageChannels = server?.channels.filter((channel: Channel) => channel.type === ChannelType.STAGE);

  const members = server?.members;

  const role = server.members.find((member: Member) => member.profileId == profile.id)?.role;

  return (
    <div className={"flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]"}>
      <ServerHeader server={server} role={role}/>
    </div>
  );
}