import Icon from "./Icon"
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const links = [
        {path:"/",label:"Accueil"},
        {path:"/nos-services",label:"Nos services"},
        {path:"/rendez-vous",label:"Rendez-vous"},
        {path:"/contact",label:"Contact"},
    ]
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false)

    const menuSwitcher = () => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    }

    return (
        <>
            <nav className='hidden md:flex lg:text-lg md:text-sm gap-5 text-slate-100'>
                {
                    links.map((link,id) => <NavLink className={({isActive}) => isActive ? "border-b-3 border-green-400" : ""} to={link.path} key={id} >{link.label}</NavLink>)
                }
            </nav>

            {/* PHONE FORMAT */}
            <div className='md:hidden font-bold text-3xl flex justify-end w-full m-2'>
                <span className="text-slate-100 z-8">
                    <Icon icon={menuOpen ? faXmark : faBars} onClick={menuSwitcher} />
                </span>
            </div>
            <nav id="mobile-menu" 
                className={`${menuOpen ? "end-0 opacity-100" : "end-190 opacity-0"}
                    transition-[right,opacity] flex top-[15vh] min-h-[70vh] duration-500 z-7 ease-in-out overflow-hidden
                    flex-wrap content-evenly absolute bg-green-400 text-gray-300
                    md:hidden w-screen`
                }>
                {
                    links.map((link,id) => <NavLink className={({isActive}) => isActive ? "" : ""} to={link.path} onClick={menuSwitcher} key={id} >{link.label}</NavLink>)
                }
            </nav>

        </>
    )
}

export default Navbar;