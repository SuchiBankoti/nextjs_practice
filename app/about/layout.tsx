export default function layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <>
          <nav>about navbar</nav>
          <main>{children}</main>    
    </>
  )
}
