'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem, NavItemInterface } from "../Navitem";
import { FaBars, FaXmark } from "react-icons/fa6";
import "./index.css";
import { useState } from "react";

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

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    return (
        <header>
            <nav className="navbar">
                <Link href="/" className="link-home">
                    Home
                </Link>
                <ul className={`nav-items ${openMenu ? 'open' : ''}`}>
                    {items.map((item, index) => (
                        <NavItem
                            key={index}
                            url={item.url}
                            label={item.label}
                            isActive={pathName === item.url}
                        />
                    ))}
                </ul>
                <button className="btn-mobile" onClick={() => setOpenMenu(!openMenu)}>
                    {openMenu ? <FaXmark /> : <FaBars />}
                </button>
            </nav>
        </header >
    )
}