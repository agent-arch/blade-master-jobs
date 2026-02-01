import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Word Blade Master | Vacature Windturbine Technicus",
  description: "Werk op 150 meter hoogte. Op zee. Met de wind als collega. Solliciteer nu als Blade Master en word onderdeel van de energietransitie.",
  keywords: "blade master, windturbine, vacature, offshore, windenergie, technicus, GWO, rope access",
  openGraph: {
    title: "Word Blade Master | Vacature Windturbine Technicus",
    description: "Werk op 150 meter hoogte. Op zee. Met de wind als collega.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased" style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
