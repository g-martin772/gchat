"use client";

import {Plus} from "lucide-react";
import {ActionTooltip} from "@/components/action-tooltip";
import {useModal} from "../../../hooks/use-modal-store";

export function NavigationAction() {
  const { onOpen } = useModal();

  return (
    <div>
      <ActionTooltip label={"New"} side={"right"} align={"center"}>
        <button className={"group"} onClick={() => onOpen("createServer")}>
          <div
            className={"flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500"}>
            <Plus className={"group-hover:text-white transition text-emerald-500"}/>
          </div>
        </button>
      </ActionTooltip>
    </div>
  );
}