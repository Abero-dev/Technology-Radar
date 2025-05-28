import { NavLink } from "react-router-dom";

const HomeFooter: React.FC = () => {
    return (
        <footer className="bg-slate-600 text-white text-center py-8 px-0 w-full flex justify-center">
            <div className="flex flex-col items-center gap-5">
                <section className="social-container">
                    {[
                        { link: "https://www.facebook.com/vertexuci", imgSrc: "/facebook_logo.png", alt: "facebook_logo", hoverColor: "hover:bg-amber-500" },
                        { link: "https://t.me/vertexti", imgSrc: "/telegram_logo.png", alt: "telegram_logo", hoverColor: "hover:bg-orange-600" },
                        { link: "https://x.com/VertexUCI", imgSrc: "/x_logo.png", alt: "x_logo", hoverColor: "hover:bg-white" },
                        { link: "https://www.youtube.com/channel/UCOcXlOj-1NORORMxMBDl5MQ", imgSrc: "/youtube_logo.png", alt: "youtube_logo", hoverColor: "hover:bg-cyan-400" },
                        { link: "https://www.instagram.com/vertexuci/", imgSrc: "/instagram_logo.png", alt: "instagram_logo", hoverColor: "hover:bg-gradient-to-b hover:from-emerald-500 hover:via-emerald-400 hover:to-blue-800" },
                        { link: "https://www.linkedin.com/vertexuci/", imgSrc: "/linkedin_logo.png", alt: "linkedin_logo", hoverColor: "hover:bg-gradient-to-b hover:from-blue-500 hover:via-blue-400 hover:to-blue-800" }
                    ].map(({ link, imgSrc, alt, hoverColor }, index) => (
                        <NavLink key={index} to={link} target="_blank" className={`social-logo-container w-16 h-16 bg-white flex items-center justify-center overflow-hidden rounded-full ${hoverColor} hover:invert transition-transform duration-300`}>
                            <img src={imgSrc} alt={alt} className="img_social_logo w-10 h-10 rounded-lg" />
                        </NavLink>
                    ))}
                </section>
                <p className="text-3xl m-0">© 2025 Centro de Tecnologías Interactivas. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default HomeFooter;
