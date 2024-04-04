import { Breadcrumb, Container, Footer, Navbar } from "../../components"
import { Clock, Document, Globe, Person } from "../../components/icons"

export const Book = () => {
    return (
        <Container>
            <Navbar />
            <div className="mx-12 py-6 2xl:mx-[18%]">
                <Breadcrumb menus={["Beranda", "Buku"]} />
            </div>
            <div className="content w-screen px-12 mb-12 flex flex-col md:flex-row md:justify-between 2xl:px-[18%]">
                <div className="description-book md:w-1/2 md:mr-10 2xl:w-[70%]">
                    <h1 className="title font-bold text-2xl md:text-[32px]">KRING! KRING!</h1>
                    <h3 className="author font-medium text-lg mt-1 mb-3 md:text-xl md:my-5">Nurhayati Pujiastuti </h3>
                    <div className="sinopsis mb-5">
                        <h3 className="title-sinopsi font-semibold text-lg md:text-xl md:mt-8 md:mb-4">Sinopsis</h3>
                        <p className="description-sinopsi md:text-lg">
                            Lagi-lagi Ibu terlambat menjemput Momo di sekolah. Ibu harus berjalan kaki karena Ibu tidak bisa naik sepeda. Kini Ibu ingin belajar naik sepeda. Namun, Ibu harus menemukan sepeda yang cocok untuknya. Yuk, simak kisah Ibu mencari sepeda yang pas!
                        </p>
                    </div>
                </div>
                <div className="cover-book bg-slate-200 p-5 rounded-xl md:w-1/2 2xl:w-[30%]">
                    <img src="https://cmsweb.bukuaku.id/storage/91958/conversions/KjJ0fAzOz7eMgMJVQwOYhM9awwqRSf-metaMjAxNy1LcmluZyEtS3JpbmchLS0tQ292ZXIuanBn--large.jpg" alt="" className="mx-auto" />
                    <div className="detail-book flex justify-evenly pt-4">
                        <div className="flex flex-col items-center">
                            <Person />
                            <p className="">5 - 12 th</p>
                        </div>
                        <span className="w-[1px] h-10 bg-black mx-2"></span>
                        <div className="flex flex-col items-center">
                            <Clock />
                            <p className="">30 menit</p>
                        </div>
                        <span className="w-[1px] h-10 bg-black mx-2"></span>
                        <div className="flex flex-col items-center">
                            <Document />
                            <p className="">17</p>
                        </div>
                        <span className="w-[1px] h-10 bg-black mx-2"></span>
                        <div className="flex flex-col items-center">
                            <Globe />
                            <p className="">ID</p>
                        </div>
                    </div>
                    <div className=" flex pt-6 justify-around">
                        <a href="#" className="bg-[#946eaf] w-1/2 text-center py-1 text-white rounded-md">Beli Buku</a>
                        <a href="#" className="border mx-2 border-[#946eaf] w-1/2 text-center py-1 text-[#946eaf] rounded-md">Baca Buku</a>
                    </div>
                </div>
            </div>
            <Footer />
        </Container>
    )
}
