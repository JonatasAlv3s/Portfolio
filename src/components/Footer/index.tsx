'use client';

import { Fira_Code } from "next/font/google";

import "./index.css";

const firaCode = Fira_Code({ subsets: ["latin"], weight: ["400", "500", "700"] });

export function Footer() {
    return (
        <footer>
            <div className={`${firaCode.className} footer-container`}>
                <p className="text-footer">© {new Date().getFullYear()} Jonatas Alves. Todos os direitos reservados.</p>
            </div>
        </footer >
    )
}