import {auth} from "@clerk/nextjs";
import {db} from "./db";

export function currentProfile() {
  const { userId } = auth();
  if (!userId) return null;

  const profile = db.profile.findUnique({ where: { userId } });
  if (!profile) return null;

  return profile;
}