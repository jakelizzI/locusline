export default function RootLayout({
    children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="body-style">{children}</body>
    </html>
  )
}
