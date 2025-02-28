import HomeFooter from "./HomeFooter"

const Home = () => {
    return (
        <>
            <main className="main-content">
                <section className="section-gradient">
                    <div className="container text-center">
                        <h2 className="section-title">Monitoreo y Vigilancia Tecnológica</h2>
                        <p className="section-description">
                            Mantente al tanto de las últimas tendencias y avances tecnológicos con nuestro servicio de vigilancia a través de radar.
                        </p>
                        <button className="cta-button">
                            Descubre Más
                        </button>
                    </div>
                </section>

                <section className="section">
                    <div className="container text-center">
                        <h2 className="section-title">¿Cómo Funciona?</h2>
                        <div className="flex-container">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img alt="Ilustración de radar tecnológico" className="card-image" src="https://storage.googleapis.com/a1aa/image/EuD2Mb4BEZ-GnGtrZYw5ZmG9Xd4XDMoKkxJVzGgnxoM.jpg" />
                                    </div>
                                    <div class="flip-card-back">
                                        <p class="title">Utilizamos tecnología avanzada para detectar las últimas tendencias y avances en el mundo tecnológico.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img alt="Ilustración de análisis de datos" className="card-image" src="https://storage.googleapis.com/a1aa/image/W2tBAltJjAzDUIyRAFVAvT9s8mQBUBysSB1AUDT-gqI.jpg" />
                                    </div>
                                    <div class="flip-card-back">
                                        <p class="title">Nuestro equipo de expertos analiza los datos recolectados para ofrecerte información relevante y actualizada.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img alt="Ilustración de informe detallado" className="card-image" src="https://storage.googleapis.com/a1aa/image/HtUPULEL0hcDTEEU1c8Qox-DEq0kPmLZMjGYhS35CH4.jpg" />
                                    </div>
                                    <div class="flip-card-back">
                                        <p class="title">Te proporcionamos informes detallados y personalizados para que tomes decisiones informadas</p>
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