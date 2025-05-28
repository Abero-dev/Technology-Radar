import React from "react";
import SMOListElement from "./SMOListElement";

interface SideMenuOptionListProps {
    list: string[];
    type: "oficiales" | "candidatos" | "ignorados";
}

const SideMenuOptionList: React.FC<SideMenuOptionListProps> = ({ list, type }) => {
    return (
        <ul className="text-xl flex flex-col items-center gap-y-3 transition-all mb-5 animate-grow-from-top">
            {list.map((element, index) => (
                <SMOListElement key={index} index={index} element={element} type={type} />
            ))}
        </ul>
    );
};

export default SideMenuOptionList;
