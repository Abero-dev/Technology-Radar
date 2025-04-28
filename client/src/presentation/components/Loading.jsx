/**
 * Componente animado Loading
 * @returns Componente para detener el flujo de la aplicación mientras un proceso se ejecuta.
 */
const Loading = () => {
    return (
        // <div className='flex flex-col justify-center min-h-screen'>
        //     <span className='mx-auto text-white px-6 py-3 bg-indigo-600 rounded-xl text-3xl'>Cargando...</span>
        // </div>
        <section 
            className="
                flex 
                flex-col 
                justify-center 
                min-h-screen
                ">
            <div className="
                mx-auto 
                flex-col
                ">
                <div className="
                    text-center 
                    my-5
                    ">
                    <span className="
                        text-3xl 
                        text-indigo-600 
                        font-bold
                        ">
                        Loading
                    </span>
                </div>
                <div className="
                    mx-auto 
                    flex gap-x-5
                    ">
                    <div className="
                        dot loading-dot-bg
                        w-5 h-5 rounded-full
                        "/>
                    <div className="
                        dot loading-dot-bg
                        w-5 h-5 rounded-full
                        "/>
                    <div className="
                        dot loading-dot-bg
                        w-5 h-5 rounded-full
                        "/>
                    <div className="
                        dot loading-dot-bg
                        w-5 h-5 rounded-full
                        "/>
                    <div className="
                        dot loading-dot-bg
                        w-5 h-5 rounded-full
                        "/>
                </div>
            </div>
        </section>
    )
}

export default Loading