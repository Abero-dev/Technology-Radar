import React from 'react'

function SideMenuLog({ value = "Generative AI cambió a destacados." }) {
    return (
        <section className='w-[100%] mt-4 rounded-xl flex flex-col gap-y-2'>
            <span className='text-2xl font-bold place-self-center'>Log</span>
            <textarea className='bg-stone-100 mb-6 w-full min-h-[37vh] border-t-4 border-t-cyan-700 border-b-4 border-stone-300 rounded-xl text-black outline-none' value={`>> ${value}`}/>
        </section>
    )
}

export default SideMenuLog