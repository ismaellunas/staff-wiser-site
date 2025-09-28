import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Staff Wiser - Professional Staffing Agency",
  description: "Staff Wiser provides professional staffing services including Social Media Management, Virtual Assistance, Graphics Design, Website Development, Shopify Development, and Custom Services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
