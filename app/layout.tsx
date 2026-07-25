import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import { GlobalBackground } from "@/components/GlobalBackground";

export const metadata: Metadata = {
  title: "FKTECH - Interactive 3D Portfolio",
  description: "Bring your UI to life with beautiful 3D scenes and dynamic interactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background text-foreground transition-colors duration-500" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <GlobalBackground>
            <CustomCursor />
            <Navbar />
            {children}
          </GlobalBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}

