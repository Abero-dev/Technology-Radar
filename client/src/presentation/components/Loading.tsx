import React from "react";

/**
 * @description Componente animado `Loading` que muestra una animación para detener el flujo de la aplicación mientras un proceso se ejecuta.
 * @returns Un componente visual para indicar que una acción está en progreso.
 */
const Loading: React.FC = () => {
    return (
        <section className="flex flex-col justify-center min-h-screen">
            <div className="mx-auto flex-col">
                <div className="text-center my-5">
                    <span className="text-3xl text-indigo-600 font-bold">Loading</span>
                </div>
                <div className="mx-auto flex gap-x-5">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="dot loading-dot-bg w-5 h-5 rounded-full" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Loading;
