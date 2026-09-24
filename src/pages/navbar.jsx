import logo from "../assets/img/logo.jpg"
import { useState } from "react"
import { Menu, X } from "lucide-react"


function NavBar() {
    const [menu, setMenu] = useState(false)

    const links = [
        {
            nome: "ÍNICIO",
            url: "#inicio"
        },
        {
            nome: "SOBRE",
            url: "#sobre"
        },
        {
            nome: "SHOP",
            url: "#shop"
        },
        {
            nome: "BANHO E TOSA",
            url: "#banhoetosa"
        },
        {
            nome: "CONSULTAS",
            url: "#consultas"
        }

    ]
    return (
        <nav className="bg-[#FDFAF3] top-0 left-0 fixed w-full z-500 shadow-sm">
            <div className="flex justify-around items-center w-full px-6 py-2">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="logo" className="w-12 h-12 md:w-13 md:h-13 rounded-2xl" />
                    <div className="text-emerald-800 text-lg md:text-1xl font-['Inter'] font-bold">PET CENTER</div>
                </div>
                <ul className="md:flex hidden gap-6">
                    {links.map((link) => (
                        <li key={link.url}>
                            <a href={link.url} className="text-emerald-800 font-['Inter'] font-semibold text-sm hover:text-[#D4A853] transition-colors duration-300 cursor-pointer">{link.nome}</a>
                        </li>
                    ))}
                </ul>
                <button onClick={() => setMenu(!menu)} className="md:hidden text-zinc-500">
                    {menu ? <X size={30} /> : < Menu size={30} />}
                </button>
                <a href="https://wa.me/558888597138?text=Olá!%20Tudo%20bem." target="_blank" rel="noopener noreferrer" className="hidden md:flex font-['Inter'] text-white text-sm font-semibold text-capitalize cursor-pointer bg-emerald-800 px-4 py-2 rounded-md w-max hover:bg-[#D4A853] hover:text-emerald-950 transition-all duration-300 shadow-md">Agendar</a>
            </div>
            <div
                className={`md:hidden bg-emerald-800 w-full overflow-hidden transition-all duration-300 ease-in-out ${menu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className="flex flex-col px-5 py-5 gap-5 items-start cursor-pointer">
                    {links.map((link) => (
                        <li key={link.url}>
                            <a
                                href={link.url}
                                onClick={() => setMenu(false)}
                                className="text-gray-50 font-semibold block hover:text-zinc-200 transition-colors cursor-pointer"
                            >
                                {link.nome}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;