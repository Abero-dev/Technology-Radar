import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const [homeOption, setHomeOption] = useState(true);
    const [radarOption, setRadarOption] = useState(false);
    const [otherOption, setOtherOption] = useState(false);

    const navigate = useNavigate();

    // show border in *home* if it is selected
    const changeHomeOption = () => {
        setHomeOption(true);
        setRadarOption(false);
        setOtherOption(false);
        navigate('/');
    }

    // show border in *technology radar* if it is selected
    const changeRadarOption = () => {
        setHomeOption(false);
        setRadarOption(true);
        setOtherOption(false);
        navigate('/radar');
    }

    // show border in *other option* if it is selected
    const changeOtherOption = () => {
        setHomeOption(false);
        setRadarOption(false);
        setOtherOption(true);
        navigate('/other-option');
    }

    return (
        <>
            <div className='navbar'>
                <ul>
                    {homeOption ?
                        <li onClick={changeHomeOption} className='navbar-li-selected'>Home</li>
                        :
                        <li onClick={changeHomeOption}>Home</li>
                    }
                    {radarOption ?
                        <li onClick={changeRadarOption} className='navbar-li-selected'>Technology Radar</li>
                        :
                        <li onClick={changeRadarOption}>Technology Radar</li>
                    }
                    {otherOption ?
                        <li onClick={changeOtherOption} className='navbar-li-selected'>Other Option</li>
                        :
                        <li onClick={changeOtherOption}>Other Option</li>
                    }
                </ul>
            </div>
            <div className='navbarBase'></div>
        </>
    )
}
