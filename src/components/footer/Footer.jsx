import { Instagram } from './../icons';
import { Facebook } from './../icons';
import { Tiktok } from './../icons';


export const Footer = () => {
    return (
        <footer className="w-screen pt-16 overflow-x-hidden">
            <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
                <div className="content-text w-[70%] md:w-1/2 md:px-12 2xl:w-[40%] 2xl:mx-[12%]">
                    <h3 className="text-center font-bold text-2xl py-12 md:text-left 2xl:text-[32px]">
                        Pengalaman membaca yang
                        lebih menyenangkan
                        dengan Jitungpet
                    </h3>
                </div>
                <div className="content-image md:w-1/2 2xl:w-[60%] 2xl:mx-[12%]">
                    <img src="https://bukuaku.id/_nuxt/img/footer-phone-mobile.9f39d9a.png" alt="Footer" className="" />
                </div>
            </div>
            <div className="mid w-screen flex flex-col items-center md:flex-row md:items-center md:justify-between 2xl:mx-[12%]">
                <div className="py-5 md:w-screen">
                    <a href="#" className="mx-2 md:mx-12 text-xl">Tentang Kami</a>
                    <a href="#" className="mx-2 md:mx-0 text-xl">Kontak</a>
                </div>
                <div className="social-media w-screen flex justify-center pb-5 md:pb-0 2xl:mx-[12%]">
                    <a href="#" className="mx-4 md:mx-7"><Instagram /></a>
                    <a href="#" className="mx-4 md:mx-7"><Facebook /></a>
                    <a href="#" className="mx-4 md:mx-7"><Tiktok /></a>
                </div>
            </div>
            <div className="bottom top w-screen h-16 bg-red-100 flex items-center justify-center">
                <p className="">Copyright © 2024 Jitungpet</p>
            </div>
        </footer>
    )
}
