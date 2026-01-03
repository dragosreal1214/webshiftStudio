import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="ySGooi5r0NIMd7fkjgFNzhgcPuVKkCeMcTNEsvX1tjc" />
      <body>{children}</body>
    </html>
  );
}
