import { Container, Footer, Navbar, Slider } from "../../components"

export const Home = () => {
  return (
    <Container>
        <Navbar />
        <div className="container">
            <video autoPlay muted className="relative w-screen md:hidden">
                <source src="https://bukuaku.id/_nuxt/videos/landlord-entry-mobile.88dfb1c.mp4" type="video/mp4"/>
            </video>
            <video autoPlay muted className="relative w-screen hidden md:block">
                <source src="https://bukuaku.id/_nuxt/videos/landlord-loop.81a8dba.mp4" type="video/mp4"/>
            </video>
            <div className="w-screen absolute top-[20%] flex flex-col items-center">
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
