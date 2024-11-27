"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const links=[
    {href:"/",label:"Home"},
    {href:"/about/aboutus",label:"About Us"},
    {href:"/products/sumsang",label:"New Products"},
    {href:"/login",label:"Login"}
]

export const Navigation=()=>{
    const pathname=usePathname();
    return(
        <nav className='text-center'>
           {links.map(({href,label})=>(
            <Link key={href} href={href}
            className={(pathname === href) || (href != "/" && pathname.startsWith(href)) ? "font-bold mr-4": "text-blue-500 mr-4"}
           >{label}</Link>
        ))}
        </nav>
    )
}
