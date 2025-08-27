import { useEffect } from 'react';
import { useState } from 'react';
import Icon from '../components/Icon';
import { faEnvelope, faPhone, faLocation } from '@fortawesome/free-solid-svg-icons';

const BannerFixed = () => {

    const [scrollY,setScrollY] = useState(0);
    const [effectBar,setEffectBar] = useState(false);

    const handleScroll = () =>  {
        if (window.scrollY < scrollY) {
            setEffectBar(false)            
        }else{
            setEffectBar("hidden")
        }
        setScrollY(window.scrollY);
    }

    useEffect(() => {        
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY])

    return (
        <div className={`w-full banner-actions transition-hidden duration-1000 ease-in-out ${effectBar ? "opacity-0" : "opacity-100"} bottom-0 fixed min-h-[8vh] z-99 bg-black flex justify-evenly items-center text-white`}>
            <div className='flex items-center'>
                <Icon icon={faEnvelope} className="bg-green-400 rounded-full p-3 mx-3" /><a href='mailto:contact@example.com' className='hidden md:inline'>Email</a>
            </div>
            <div className='flex items-center'>
                <Icon icon={faPhone} className="bg-green-400 rounded-full p-3 mx-3" /><a href='tel:+33123456789' className='hidden md:inline'>Contact</a>
            </div>
            <div className='flex items-center'>
                <Icon icon={faLocation} className="bg-green-400 rounded-full p-3 mx-3" /><a href='' className='hidden md:inline'>Où ?</a>
            </div>
        </div>
    )
}

export default BannerFixed;