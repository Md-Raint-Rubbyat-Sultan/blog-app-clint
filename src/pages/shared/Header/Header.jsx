import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import '../Header/Header.css';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className='bg-stone-700'>
            <nav className='flex justify-around items-center h-20 xl:h-32'>
                <h1 className='text-3xl text-amber-500 font-bold'>
                    <Link to={'/'}>Rimis-Blog</Link>
                </h1>
                <div className='hidden sm:block'>
                    <ul className='flex justify-between items-center text-white'>
                        <li className='me-8 font-bold'>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className='me-8 font-bold'>
                            <Link to={'/blog'}>My Blogs</Link>
                        </li>
                        <li className='font-bold'>
                            <Link to={'/login'}>Login</Link>
                        </li>
                    </ul>
                </div>
                <div className='block sm:hidden'>
                    <FaBars onClick={()=>setShowMenu(!showMenu)} className='text-2xl text-white' />
                    <ul className={`${showMenu? 'megaMenu': "hidden"} text-white text-left p-5`}>
                    <li className='me-5 font-bold'>
                            <Link to={'/'}>Home</Link>
                        </li>
                        <li className='font-bold my-3'>
                            <Link to={'/blog'}>My Blogs</Link>
                        </li>
                        <li className='font-bold'>
                            <Link to={'/login'}>Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;