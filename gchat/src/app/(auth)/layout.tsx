import React from "react";

export default function authLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className={"h-full flex justify-center items-center"}>
      {children}
    </div>
  )
}