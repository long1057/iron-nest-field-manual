import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "IRON NEST Field Manual",
    template: "%s",
  },
  description: "A source-led, version-aware guide to IRON NEST: Heavy Turret Simulator.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  other: {
    "google-site-verification": "fEfaJjdgOYLmkMZwpLRShIPp999sif8--5-WKxfVL3Q",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en">
      <body>
        {children}
        {measurementId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${measurementId}');`,
              }}
            />
          </>
        ) : null}
      </body>
    </html>
  );
}
