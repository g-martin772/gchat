import {initialProfile} from "@/lib/initial-profile";
import {db} from "@/lib/db";
import {redirect} from "next/navigation";
import InitialModal from "@/components/models/inital-model";

export default async function SetupPage() {
  const profile = await initialProfile();

  const server = await db.Server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      }
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return (
    <InitialModal />
  );
}

