"use client";

import CreateServerModal from "@/components/models/create-server-modal";
import {useEffect, useState} from "react";
import InviteModal from "@/components/models/invite-modal";

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!isMounted) return null;

  return(
    <>
      <CreateServerModal />
      <InviteModal />
    </>
  )
}