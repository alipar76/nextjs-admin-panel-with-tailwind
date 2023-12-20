import type { Metadata } from "next";

import Sidebar from "@/components/shared/Sidebar";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
    title: "Dashboard",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="h-screen">
                <div className="flex h-screen">
                    <Sidebar />
                    <div className="flex-1">
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
