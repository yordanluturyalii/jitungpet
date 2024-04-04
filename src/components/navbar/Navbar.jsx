import { useState } from 'react'
import Logo from './../../assets/logo.png'
import { Cross, Hamburger } from '../icons'

export const Navbar = () => {

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handleClickOpenMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    }

    return (
        <>
            <nav className="nav bg-sky-50 w-screen h-16 fixed z-50 md:flex md:items-center md:justify-between">
                <div className="flex items-center mx-12 justify-between md:mx-9 2xl:mx-[15%]">
                    <img src={Logo} alt="Logo" className='w-32 mt-2 cursor-pointer md:mt-0 md:w-44 2xl:w-64' />
                    <div className="hamburger-menu mt-2 cursor-pointer bg-[#946eaf] p-2 rounded-full md:hidden" onClick={handleClickOpenMenu}>
                        {isOpenMenu ? <Cross /> : <Hamburger />}
                    </div>
                </div>
                <ul className={`w-screen h-screen bg-sky-50 flex flex-col z-50 px-12 ${isOpenMenu ? '' : 'hidden'} md:flex md:flex-row md:h-0 md:bg-none md:items-center md:w-screen md:justify-end 2xl:px-[10%]`}>
                    <li className="mt-10 my-7 md:mt-7 md:mx-4"><a href="" className="font-medium lg:text-lg xl:text-xl">Buku Terbaru</a></li>
                    <li className="my-7 md:mx-4"><a href="" className="font-medium lg:text-lg xl:text-xl">Beranda</a></li>
                    <li className="my-7 md:mx-4"><a href="" className="font-medium lg:text-lg xl:text-xl">Koleksi Buku</a></li>
                    <li className="my-7 md:mx-4"><a href="" className="font-medium lg:text-lg xl:text-xl">Tentang Kami</a></li>
                </ul>
            </nav>
        </>
    )
}
