export default function authLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className={"flex justify-center content-center"}>
      {children}
    </div>
  )
}