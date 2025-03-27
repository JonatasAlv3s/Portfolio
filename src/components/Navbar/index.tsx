'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem, NavItemInterface } from "../Navitem";
import "./index.css";

export function Navbar() {

    const items: NavItemInterface[] = [
        {
            url: "/about",
            label: "Sobre"
        },
        {
            url: "/skill",
            label: "Skills"
        },
        {
            url: "/Project",
            label: "Projetos"
        },
        {
            url: "/contacto",
            label: "Contatos"
        },
    ]

    const pathName = usePathname();

    return (
        <header>
            <nav className="navbar">
                <Link href="/" className="link-home">
                    Home
                </Link>
                <ul className="nav-items">
                    {items.map((item, index) => (
                        <NavItem
                            key={index}
                            url={item.url}
                            label={item.label}
                            isActive={pathName === item.url}
                        />
                    ))}
                </ul>
            </nav>
        </header>
    )
}