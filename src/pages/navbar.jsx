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
        <nav className="bg-teal-500 top-0 left-0 fixed w-full z-500 ">
            <div className="flex justify-around w-full px-10 py-4">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="logo" className=" w-12 h-12 md:w-16 md:h-16 rounded-2xl" />
                    <div className="text-zinc-500 text-lg md:text-2xl font-normal">PET CENTER</div>
                </div>

                <ul className="md:flex hidden gap-6">
                    {links.map((link) => (
                        <li key={link.url}>
                            <a href={link.url} className="text-zinc-400 text-xl font-normal text-capitalize hover:text-zinc-200 transition-colors cursor-pointer">{link.nome}</a>
                        </li>
                    ))}
                </ul>

                <button onClick={()=> setMenu(!menu)} className="md:hidden text-zinc-500">
                    {menu ? <X size={30}/> : < Menu size={30}/>}
                </button>
            </div>
            <div 
            className={`md:hidden bg-teal-600 w-full overflow-hidden transition-all duration-300 ease-in-out ${
                menu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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