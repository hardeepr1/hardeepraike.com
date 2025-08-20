import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Body from "@/components/Body";
import "./globals.css";

export const metadata = {
  title: 'Hardeep Raike Portfolio',
  description: 'Personal portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
      <html lang="en">
        <body>
          <Header />
          <Body>
            {children}
          </Body>
          <Footer />
        </body>
      </html>
    );
}
