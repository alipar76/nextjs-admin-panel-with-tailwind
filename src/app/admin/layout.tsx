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
                <div className="grid grid-cols-[230px_minmax(900px,_1fr)] h-screen">
                    <Sidebar />
                    <div>
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
