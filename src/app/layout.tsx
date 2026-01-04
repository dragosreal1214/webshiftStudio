import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="ySGooi5r0NIMd7fkjgFNzhgcPuVKkCeMcTNEsvX1tjc" />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
