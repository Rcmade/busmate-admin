import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "../components/Common/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthSession from "@/components/Auth/AuthSession";
import { getUser } from "@/lib/actions/authActions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Busmate Admin",
  description: "Busmate Admin for managing the Busmate app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} dark:bg-black dark:text-white  `}>
        <AuthSession>
          <Navbar />
          <main className="max-w-10xl px-4 md:px-20 mx-auto">{children}</main>
          <ToastContainer position="top-center" />
        </AuthSession>
      </body>
    </html>
  );
}
