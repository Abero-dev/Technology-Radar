import React from 'react'
import { SideBar } from './SideBar'

export const OtherComponent = () => {
    return (
        <>
            <SideBar page={'otherOption'} />
            <div className='otherComponent'>OtherComponent</div>
        </>
    )
}
