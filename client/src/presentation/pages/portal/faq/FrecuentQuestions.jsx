const FrecuentQuestions = () => {
    return (
        <>
            <img src="/pregunta_faq.png" className="opacity-5 absolute w-20 h-20 top-[160px] left-[40px] rotate-[30deg]"></img>
            <img src="/pregunta_faq.png" className="opacity-5 absolute w-24 h-24 top-[320px] left-[120px] rotate-[325deg]"></img>
            <img src="/pregunta_faq.png" className="opacity-5 absolute w-16 h-16 top-[480px] left-[40px] rotate-[10deg]"></img>
            <img src="/pregunta_faq.png" className="opacity-5 absolute w-20 h-20 top-[640px] left-[120px] rotate-[300deg]"></img>

            <img src="/pregunta_faq.png" className="opacity-5 absolute w-16 h-16 top-[160px] right-[40px] rotate-[30deg]"></img>
            <img src="/pregunta_faq.png" className="opacity-5 absolute w-20 h-20 top-[320px] right-[120px] rotate-[325deg]"></img>
            <img src="/pregunta_faq.png" className="opacity-5 absolute w-24 h-24 top-[480px] right-[40px] rotate-[10deg]"></img>
            <img src="/pregunta_faq.png" className="opacity-5 absolute w-16 h-16 top-[640px] right-[120px] rotate-[300deg]"></img>

            <section className="h-[90vh] flex flex-col items-center justify-center gap-y-16">
                <section className="flex flex-col justify-center items-center gap-y-3">
                    <span className="font-bold text-6xl">FAQ! Necesitas ayuda?</span>
                    <span className="text-2xl">Vamos a eliminar tus dudas en un parpadeo !</span>
                    <p className="text-3xl font-bold uppercase mt-8">Por favor selecciona las opciones debajo para ayudarte</p>
                    <p className="uppercase text-xl">Tu problema con qué se encuentra más relacionado ?</p>
                </section>
                <section className="flex justify-between gap-x-20">
                    <figure className="flex flex-col items-center gap-y-3 rounded-t-full w-52">
                        <figcaption className="rounded-full bg-blue-500 w-20 h-20 flex justify-center items-center hover:scale-110 hover:bg-cyan-500 transition-all 0.3s">
                            <img src="/radar_faq.png" className="w-12 h-12 "></img>
                        </figcaption>
                        <span className="text-lg">Radar</span>
                    </figure>
                    <figure className="flex flex-col items-center gap-y-3 rounded-t-full w-52">
                        <figcaption className="rounded-full bg-blue-500 w-20 h-20 flex justify-center items-center hover:scale-110 hover:bg-cyan-500 transition-all 0.3s">
                            <img src="/notificacion_faq.png" className="w-12 h-12"></img>
                        </figcaption>
                        <span className="text-lg">Notificaciones</span>
                    </figure>
                    <figure className="flex flex-col items-center gap-y-3 rounded-t-full w-52">
                        <figcaption className="rounded-full bg-blue-500 w-20 h-20 flex justify-center items-center hover:scale-110 hover:bg-cyan-500 transition-all 0.3s">
                            <img src="/configuration_faq.png" className="w-12 h-12"></img>
                        </figcaption>
                        <span className="text-lg">Configuraciones</span>
                    </figure>
                    <figure className="flex flex-col items-center gap-y-3 rounded-t-full w-52">
                        <figcaption className="rounded-full bg-blue-500 w-20 h-20 flex justify-center items-center hover:scale-110 hover:bg-cyan-500 transition-all 0.3s">
                            <img src="/heart_faq.png" className="w-12 h-12"></img>
                        </figcaption>
                        <span className="text-lg">Darnos un cumplido</span>
                    </figure>
                </section>
            </section>
        </>
    )
}

export default FrecuentQuestions