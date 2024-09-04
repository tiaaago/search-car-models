import { Inter } from "next/font/google";
import "./globals.css";
import { CarsProvider } from "@/contexts/CarsContext";
import { YearProvider } from "@/contexts/YearContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Car Models Search",
    description: "Use to search models of cars by make and year.",
};

export default function RootLayout({ children }) {
    return (
        <YearProvider>
            <CarsProvider>
                <html lang="en">
                    <head>
                        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                    </head>
                    <body className={inter.className}>{children}</body>
                </html>
            </CarsProvider>
        </YearProvider>
    );
}
