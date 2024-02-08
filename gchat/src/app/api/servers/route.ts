import {currentProfile} from "@/lib/current-profile";
import {db} from "@/lib/db";
import {NextResponse} from "next/server";
import { v4 as uuidv4 } from "uuid";
import {$Enums, MemberRole} from "@prisma/client";
import ChannelType = $Enums.ChannelType;

export async function POST(req: Request) {
  try {
    const { name, imageUrl } = await req.json();
    const profile = await currentProfile();

    if (!profile) return new NextResponse("Unauthorized", { status: 401 });

    const server = await db.server.create({
      data: {
        profileId: profile.id,
        name,
        imageUrl,
        inviteCode: uuidv4(),
        channels: {
          create: [
            { name: "general", profileId: profile.id, type: ChannelType.TEXT },
          ],
        },
        members: {
          create: [
            { profileId: profile.id, role: MemberRole.OWNER },
          ],
        }
      }
    });

    return NextResponse.json(server);
  } catch (e) {
    console.error(e);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}