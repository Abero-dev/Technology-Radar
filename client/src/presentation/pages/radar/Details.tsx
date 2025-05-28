import { Link } from "react-router-dom";
import React from "react";

const Detail: React.FC = () => {
    return (
        <section className="w-screen h-screen flex items-center justify-center">
            <h1 className="text-6xl">Entry Details</h1>
            <Link to="/radar">Back to Radar</Link>
        </section>
    );
};

export default Detail;
