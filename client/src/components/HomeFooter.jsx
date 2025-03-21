import { NavLink } from "react-router-dom"

const HomeFooter = () => {
    return (
        <footer className="bg-slate-600 text-white text-center py-8 px-0 w-full flex justify-center">
            <div className="container text-center">
                <section className="social-container">
                    <NavLink to='https://www.facebook.com/vertexuci' target="blank" className="social-logo-container container-facebook">
                        <img src="/facebook_logo.png" alt="facebook_logo" className="img_social_logo" />
                    </NavLink>
                    <NavLink to='https://t.me/vertexti' target="blank" className="social-logo-container container-telegram">
                        <img src="/telegram_logo.png" alt="facebook_logo" className="img_social_logo" />
                    </NavLink>
                    <NavLink to='https://x.com/VertexUCI' target="blank" className="social-logo-container container-x">
                        <img src="/x_logo.png" alt="facebook_logo" className="img_social_logo" />
                    </NavLink>
                    <NavLink to='https://www.youtube.com/channel/UCOcXlOj-1NORORMxMBDl5MQ' target="blank" className="social-logo-container container-youtube">
                        <img src="/youtube_logo.png" alt="facebook_logo" className="img_social_logo" />
                    </NavLink>
                    <NavLink to='https://www.instagram.com/vertexuci/' target="blank" className="social-logo-container container-instagram">
                        <img src="/instagram_logo.png" alt="facebook_logo" className="img_social_logo" />
                    </NavLink>
                </section>
                <p className="text-3xl m-0">© 2025 Centro de Tecnologías Interactivas. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default HomeFooter
