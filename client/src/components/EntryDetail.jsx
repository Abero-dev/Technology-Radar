import React from 'react'
import { NavLink } from 'react-router-dom'

function EntryDetail() {
    return (
        <section className='w-screen h-screen flex items-center justify-center'>
            <h1 className='text-6xl'>Entry Details</h1>
            <NavLink to="/radar">Back to Radar</NavLink>
        </section>
    )
}

export default EntryDetail