import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaDoorOpen } from 'react-icons/fa';
import '../Header/Header.css';
import { AuthProvider } from '../../../contexts/AuthContext/AuthContext';

const Header = () => {
    const { user, logOut } = useContext(AuthProvider);

    const [showMenu, setShowMenu] = useState(false);

    const handelLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(er => console.error(er))
    }

    return (
        <header className='bg-stone-700'>
            <nav className='flex justify-around items-center h-20 xl:h-32'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl text-amber-500 font-bold'>
                    <Link to={'/'}>Rimis Blog</Link>
                </h1>
                <div className='hidden sm:block'>
                    <ul className='flex justify-between items-center text-white md:text-xl'>
                        <li className='me-8 font-bold'>
                            <Link to={'/'}>Home</Link>
                        </li>
                        {
                            user?.uid ?
                                <li className='me-8 font-bold'>
                                    <Link to={'/blog'}>My Blogs</Link>
                                </li>
                                :
                                ''
                        }
                        {
                            user?.uid ?
                            <FaDoorOpen onClick={handelLogOut} className=' cursor-pointer'></FaDoorOpen>
                            :
                            <li className='font-bold'>
                            <Link to={'/login'}>Login</Link>
                        </li>
                        }
                    </ul>
                </div>
                <div className='block sm:hidden'>
                    <FaBars onClick={() => setShowMenu(!showMenu)} className='text-2xl text-white' />
                    <ul className={`${showMenu ? 'megaMenu' : "hidden"} text-white text-left p-5`}>
                        <li className='mb-5 font-bold'>
                            <Link to={'/'}>Home</Link>
                        </li>
                        {
                            user?.uid ?
                                <li className='mb-5 font-bold'>
                                    <Link to={'/blog'}>My Blogs</Link>
                                </li>
                                :
                                ''
                        }
                        {
                            user?.uid ?
                            <FaDoorOpen onClick={handelLogOut} className=' cursor-pointer'></FaDoorOpen>
                            :
                            <li className='font-bold'>
                            <Link to={'/login'}>Login</Link>
                        </li>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;