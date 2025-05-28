import { NavLink } from "react-router-dom";

const About: React.FC = () => {
    return (
        <NavLink
            to="/cta"
            className={({ isActive }: { isActive: boolean }) =>
                isActive
                    ? "p-1 no-underline transition-all duration-100 text-white text-center border-b-4 border-white rounded-xl text-3xl font-extrabold hover:bg-[#613bba] hover:shadow-navLiShadow hover:text-cyan-100 hover:border-cyan-100 hover:transform hover:scale-110"
                    : "p-1 no-underline transition-all duration-100 text-white text-center flex font-custom text-2xl cursor-pointer hover:rounded-xl hover:bg-[#613bba] hover:shadow-navLiShadow hover:text-cyan-100 hover:border-cyan-100 hover:transform hover:scale-110"
            }
        >
            Contáctanos
        </NavLink>
    );
};

export default About;
