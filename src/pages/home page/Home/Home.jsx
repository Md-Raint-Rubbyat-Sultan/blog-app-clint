import { } from 'react';
import '../Home/Home.css'
import NotLogin from '../NotLogin/NotLogin';

const Home = () => {
    return (
        <section>
            <section className='flex flex-col justify-center items-center viewWidth mx-auto'>
                {/* image section */}
                <div className='relative'>
                    <div className='img-box'>
                        <img className='max-h-80 cover-img' src="https://i.ibb.co/S5hcDwy/cover.jpg" alt="cover" />
                    </div>
                    <div>
                        <img className='profile-img ' src="https://i.ibb.co/5x16tYY/profile-img.jpg" alt="profile-img" />
                    </div>
                </div>
            </section>
            <section className='mt-24 sm:mt-40 md:mt-96 text-center text-5xl anime'>
                <h3 className='font-extrabold gred-color  mb-8'>Welcome</h3>
                <h3 className='font-extrabold gred-color mb-8'>To</h3>
                <h3 className='font-extrabold 
                gred-color'>Rimi-Jhimi-Bristir-Golpo</h3>
            </section>
            <NotLogin></NotLogin>
        </section>
    );
};

export default Home;