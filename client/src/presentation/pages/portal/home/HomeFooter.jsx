import { NavLink } from "react-router-dom"

const HomeFooter = () => {
    return (
        <footer className="bg-slate-600 text-white text-center py-8 px-0 w-full flex justify-center">
            <div className="flex flex-col items-center gap-5">
                <section className="social-container">
                    <NavLink to='https://www.facebook.com/vertexuci' target="blank" className="social-logo-container w-16 h-16 bg-white flex items-center justify-center overflow-hidden rounded-full hover:bg-amber-500 hover:invert transition-transform duration-300">
                        <img src="/facebook_logo.png" alt="facebook_logo" className="img_social_logo w-10 h-10 rounded-lg" />
                    </NavLink>
                    <NavLink to='https://t.me/vertexti' target="blank" className="social-logo-container w-16 h-16 bg-white flex items-center justify-center overflow-hidden rounded-full hover:bg-orange-600 hover:invert transition-transform duration-300">
                        <img src="/telegram_logo.png" alt="telegram_logo" className="img_social_logo w-10 h-10 rounded-lg" />
                    </NavLink>
                    <NavLink to='https://x.com/VertexUCI' target="blank" className="social-logo-container w-16 h-16 bg-white flex items-center justify-center overflow-hidden rounded-full hover:bg-white hover:invert transition-transform duration-300">
                        <img src="/x_logo.png" alt="x_logo" className="img_social_logo w-10 h-10 rounded-lg" />
                    </NavLink>
                    <NavLink to='https://www.youtube.com/channel/UCOcXlOj-1NORORMxMBDl5MQ' target="blank" className="social-logo-container w-16 h-16 bg-white flex items-center justify-center overflow-hidden rounded-full hover:bg-cyan-400 hover:invert transition-transform duration-300">
                        <img src="/youtube_logo.png" alt="youtube_logo" className="img_social_logo w-10 h-10 rounded-lg" />
                    </NavLink>
                    <NavLink to='https://www.instagram.com/vertexuci/' target="blank" className="social-logo-container w-16 h-16 bg-white flex items-center justify-center overflow-hidden rounded-full hover:bg-gradient-to-b hover:from-emerald-500 hover:via-emerald-400 hover:to-blue-800 hover:invert transition-transform duration-300">
                        <img src="/instagram_logo.png" alt="instagram_logo" className="img_social_logo w-10 h-10 rounded-lg" />
                    </NavLink>
                    <NavLink to='https://www.linkdedin.com/vertexuci/' target="blank" className="social-logo-container w-16 h-16 bg-white flex items-center justify-center overflow-hidden rounded-full hover:bg-gradient-to-b hover:from-blue-500 hover:via-blue-400 hover:to-blue-800 hover:invert transition-transform duration-300">
                        <img src="/linkedin_logo.png" alt="instagram_logo" className="img_social_logo w-10 h-10 rounded-lg" />
                    </NavLink>
                </section>
                <p className="text-3xl m-0">© 2025 Centro de Tecnologías Interactivas. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default HomeFooter
