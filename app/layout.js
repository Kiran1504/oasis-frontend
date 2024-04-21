import "./globals.css";
export default function RootLayout({ children }) {
  // const inter = Inter({ subsets: ["latin"] });

  return (
    <html lang="en">
      <body className={"bg-[#1E1F24]"}>
        {children}
      </body>
    </html>
  );
}