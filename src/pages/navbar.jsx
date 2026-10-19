import { useState } from "react"
import { Menu, PawPrint, X } from "lucide-react"


function NavBar() {
    const [menu, setMenu] = useState(false)

    const links = [
        {
            nome: "INÍCIO",
            url: "#inicio"
        },
        {
            nome: "SOBRE",
            url: "#sobre"
        },
        /*{
            nome: "SHOP",
            url: "#shop"
        },*/
        {
            nome: "ESTÉTICA",
            url: "#banhoetosa"
        },
        {
            nome: "CONSULTA",
            url: "#consultas"
        }

    ]
    return (
        <nav className="bg-cream-soft top-0 left-0 fixed w-full z-[500] shadow-sm">
            <div className="flex justify-around items-center w-full px-6 py-2">
                <div className="flex items-center gap-2">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-800 md:h-12 md:w-12">
                        <PawPrint aria-hidden="true" className="h-6 w-6 text-white" />
                    </span>
                    <div className="text-brand-800 text-lg md:text-1xl font-['Inter'] font-bold">JUAVET</div>
                </div>
                <ul className="md:flex hidden gap-6">
                    {links.map((link) => (
                        <li key={link.url}>
                            <a href={link.url} className="text-brand-800 font-['Inter'] font-semibold text-sm hover:text-brand-500 transition-colors duration-300 cursor-pointer">{link.nome}</a>
                        </li>
                    ))}
                </ul>
                <button
                    type="button"
                    aria-label={menu ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menu}
                    aria-controls="menu-mobile"
                    onClick={() => setMenu(!menu)}
                    className="md:hidden text-zinc-500"
                >
                    {menu ? <X size={30} /> : <Menu size={30} />}
                </button>
                <a href="#consultas" className="hidden md:flex font-['Inter'] text-white text-sm font-semibold capitalize cursor-pointer bg-brand-800 px-4 py-2 rounded-md w-max hover:bg-brand-900 transition-all duration-300 shadow-md">Agendar</a>
            </div>
            <div
                id="menu-mobile"
                inert={!menu}
                className={`md:hidden bg-cream-soft w-full overflow-hidden transition-all duration-300 ease-in-out ${menu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <ul className="flex flex-col px-5 py-5 gap-5 items-start cursor-pointer">
                    {links.map((link) => (
                        <li key={link.url}>
                            <a
                                href={link.url}
                                onClick={() => setMenu(false)}
                                className="text-gray-500 font-semibold block hover:text-zinc-400 transition-colors cursor-pointer"
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