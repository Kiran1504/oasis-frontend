'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import App from "next/app";
import { AppContextProvider } from "./components/Context";
import SideBar from "./components/SideBar";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  const token = localStorage.getItem('token'); 
  return (

    <AppContextProvider>
      <html lang="en">
      <body className={inter.className}>
      {token  ? <NavBar />: null}
      <div className='flex h-full gap-5 bg-black'>
            {token ?  <SideBar /> : null}
            <div className='grow'>
              <div>{children}</div>
            </div>
          </div>
      </body>
    </html>
    </AppContextProvider>
  );
}
