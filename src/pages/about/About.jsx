import { Breadcrumb, Container, Footer, Navbar } from "../../components"


export const About = () => {
    return (
        <Container>
            <Navbar />
            <div className="mx-12 py-6 2xl:mx-[18%]">
                <Breadcrumb menus={["Beranda", "Tentang Kami"]} />
            </div>
            <div className="content w-screen h-screen">
                <section className="flex flex-col items-center md:flex-row mx-12 2xl:mx-[14%] md:justify-between">
                    <h1 className="font-bold text-[32px] py-4">Tentang Jitungpet</h1>
                    <img src="https://placehold.co/600x400" alt="Image" className="w-[80%] pb-12 2xl:w-1/2" />
                </section>
                <section className="px-12 text-justify 2xl:mx-[12%]">
                    <p className="">
                        Menjelajahi dunia lewat imajinasi bersama anak sekarang menjadi gampang dan seru! BukuAku adalah online book portal dengan akses instan tanpa batas pada ribuan buku berkualitas dari penerbit terpercaya yang sudah terkurasi.
                    </p>
                    <br />
                    <p className="">
                        Di BukuAku, mereka akan mendapat new perspective dalam membaca. Mengasah imajinasi dan memperluas wawasan anak jadi rutinitas  yang seru, dengan buku-buku bertema menarik yang memicu rasa ingin tahu dan menginspirasi kreativitasnya.
                    </p>
                    <br />
                    <p className="">
                        Let’s encourage minat baca anak sejak dini, dengan mengoptimalkan screen time mereka!
                    </p>
                </section>
            </div>
            <Footer />
        </Container>
    )
}
