"use client";

import CreateServerModal from "@/components/models/create-server-modal";
import {useEffect, useState} from "react";

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if(!isMounted) return null;

  return(
    <>
      <CreateServerModal />
    </>
  )
}