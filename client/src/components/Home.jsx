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
            <main className="main-content">
                <div className="home-img-container">
                    {/* <img src="/home_img.jpg" alt="home_img" className="home-img" />
                    <div className="home-img-overlay"></div> */}
                    <h1 className="home-title">Bienvenido al Sistema de Vigilancia Tecnológica <div className="vigitech">VigiTech</div></h1>
                </div>
                <section className={`section-gradient ${isRotating ? 'section-gradient-rotating' : ''}`}>
                    <div className="container text-center">
                        <h2 className="section-title">Monitoreo y Vigilancia Tecnológica</h2>
                        <p className="section-description">
                            Mantente al tanto de las últimas tendencias y avances tecnológicos con nuestro servicio de vigilancia a través del radar.
                        </p>
                    </div>
                </section>

                <section className="section">
                    <div className="container text-center">
                        <h2 className="section-title">¿Cómo Funciona?</h2>
                        <div className="flex-container">
                            <div className="flip-card" data-aos="fade-left" data-aos-duration="1000">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img alt="Ilustración de radar tecnológico" className="card-image" src="/radar_tecnologico.jpg" />
                                    </div>
                                    <div className="flip-card-back">
                                        <p className="title">Utilizamos tecnología avanzada para detectar las últimas tendencias y avances en el mundo tecnológico.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card" data-aos="fade-down" data-aos-duration="1000">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img alt="Ilustración de análisis de datos" className="card-image" src="/analisis_de_datos.jpg" />
                                    </div>
                                    <div className="flip-card-back">
                                        <p className="title">Nuestro equipo de expertos analiza los datos recolectados para ofrecerte información relevante y actualizada.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flip-card" data-aos="fade-right" data-aos-duration="1000">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img alt="Ilustración de informe detallado" className="card-image" src="/hub_informacion.jpg" />
                                    </div>
                                    <div className="flip-card-back">
                                        <p className="title">Te proporcionamos informes detallados y personalizados para que tomes decisiones informadas.</p>
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