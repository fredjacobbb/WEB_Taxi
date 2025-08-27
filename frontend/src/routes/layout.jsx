import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import BannerFixed from '../components/BannerFixed';

const Layout = () => {


    return (
        <>
            <header className='flex mx-3 flex-wrap items-center text-center h-[23vh] justify-between'>
                <h1 className='text-[1.6em] sm:text-3xl text-white font-semibold py-3 md:text-5xl mx-auto md:mx-0 my-8'>
                    <a href="/">TAXI A TOUT HEURE</a>
                </h1>
                <Navbar />
            </header>
            <Outlet />
            <BannerFixed />
        </>
    )
}

export default Layout;