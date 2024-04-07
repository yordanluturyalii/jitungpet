import { Container, Footer, Navbar, Slider } from "../../components"

export const Home = () => {
  return (
    <Container>
        <Navbar />
        <div className="">
            <video autoPlay muted className="relative w-full md:hidden pt-16">
                <source src="https://bukuaku.id/_nuxt/videos/landlord-entry-mobile.88dfb1c.mp4" type="video/mp4"/>
            </video>
            <video autoPlay muted className="relative w-full hidden md:block pt-16">
                <source src="https://bukuaku.id/_nuxt/videos/landlord-loop.81a8dba.mp4" type="video/mp4" className="w-full"/>
            </video>
            <div className="w-screen absolute top-[20%] flex flex-col items-center md:top-[15%] xl:top-[25%] 2xl:top-[40%]">
                <h1 className="text-center font-extrabold text-[32px]">Ekplorasi Dunia Membaca</h1>
                <p className="w-[70%] text-center text-lg my-3">Nikmati petualangan dan keseruan dunia membaca bersama Jitungpet</p>
                <a href="#" className="mt-3 bg-[#946eaf] text-white px-10 py-2 rounded-full">Ayo Membaca</a>
            </div>
        </div>
        <Slider />
        <Footer />
    </Container>
  )
}
