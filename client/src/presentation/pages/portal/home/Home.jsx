import HomeFooter from "./HomeFooter"
import { useState, useEffect } from "react";

const Home = () => {
    const [isRotating, setIsRotating] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const triggerHeight = 150;

        if (scrollPosition > triggerHeight) {
            setIsRotating(true);
        } else {
            setIsRotating(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <main className="w-screen flex flex-col items-center grow bg-[#eee]">
                <div className="home-img-container">
                    {/* <img src="/home_img.jpg" alt="home_img" className="home-img" />
                    <div className="home-img-overlay"></div> */}
                    <h1 className="text-center font-bold text-[100px] text-white mt-[250px] leading-[175px] text-shadow">Bienvenido al Sistema de Vigilancia Tecnológica <div className="vigitech">VigiTech</div></h1>
                </div>
                <section className={`bg-gradient-to-r from-blue-500 to-purple-500 text-white w-1/2 flex justify-center px-[60px] py-[40px] text-center rounded-[50px] mt-[1000px] ${isRotating ? 'opacity-100 animate-rotacion-section-gradient' : ''}`}>
                    <div className="text-center">
                        <h2 className="text-[60px] font-bold mb-[3rem]">Monitoreo y Vigilancia Tecnológica</h2>
                        <p className="text-[40px] mb-[2rem] max-w-full">
                            Mantente al tanto de las últimas tendencias y avances tecnológicos con nuestro servicio de vigilancia a través de radar.
                        </p>
                    </div>
                </section>

                <section className="py-[5rem] text-center">
                    <div className="text-center">
                        <h2 className="text-[60px] font-bold mb-[3rem]">¿Cómo Funciona?</h2>
                        <div className="flex flex-wrap justify-center gap-[40px]">
                            <div className="flip-card" data-aos="fade-left" data-aos-duration="1000">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img alt="Ilustración de radar tecnológico" className="rounded-[1em] absolute w-full h-full top-0 mb-[1rem]" src="/radar_tecnologico.jpg" />
                                    </div>
                                    <div className="flip-card-back">
                                        <p className="text-[20px] font-semibold text-left m-0 max-w-[300px] relative top-0 left-[60px] leading-[50px]">Utilizamos tecnología avanzada para detectar las últimas tendencias y avances en el mundo tecnológico.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card" data-aos="fade-down" data-aos-duration="1000">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img alt="Ilustración de análisis de datos" className="rounded-[1em] absolute w-full h-full top-0 mb-[1rem]" src="/analisis_de_datos.jpg" />
                                    </div>
                                    <div className="flip-card-back">
                                        <p className="text-[20px] font-semibold text-left m-0 max-w-[300px] relative top-0 left-[60px] leading-[50px]">Nuestro equipo de expertos analiza los datos recolectados para ofrecerte información relevante y actualizada.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card" data-aos="fade-right" data-aos-duration="1000">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img alt="Ilustración de informe detallado" className="rounded-[1em] absolute w-full h-full top-0 mb-[1rem]" src="/hub_informacion.jpg" />
                                    </div>
                                    <div className="flip-card-back">
                                        <p className="text-[20px] font-semibold text-left m-0 max-w-[300px] relative top-0 left-[60px] leading-[50px]">Te proporcionamos informes detallados y personalizados para que tomes decisiones informadas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <HomeFooter />
        </>
    )
}

export default Home