import { } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className='flex flex-col-reverse sm:flex-row justify-evenly items-center sm:my-12 p-10'>
            <div>
                <img className='w-3/2 md:w-2/3 rounded-2xl mx-auto my-10 md:my-0' src="https://i.ibb.co/KmHwT0V/login-img.jpg" alt="login-img" />
            </div>
            <div>
                <form className='formOutLines p-12'>

                    <h3 className='text-3xl text-center md:text-4xl font-bold'>Login</h3>

                    <div className='flex flex-col justify-center items-start my-10'>

                        <div>
                            <label className='md:text-2xl' htmlFor="email">
                                <input className='block  mb-7 py-2 px-4 inputField' id='email' type="email" placeholder='Enter your email' />
                            </label>
                        </div>

                        <div>
                            <label className='md:text-2xl' htmlFor="password">
                                <input className='block py-2 px-4 inputField' id='password' type="password" placeholder='Password' />
                            </label>
                        </div>

                        <p className='text-amber-500 my-7'><small>Forget Password</small></p>

                        <div className='flex flex-col justify-between items-center'>
                            <button className='font-bold py-3 px-10 bg-amber-500 text-white border-2 rounded-lg btn-hover'>Login</button>
                            <p className='text-xl text-gray-400 my-3'>or</p>
                            <button className='font-bold py-3 px-10 bg-amber-500 text-white border-2 rounded-lg btn-hover'>Google</button>
                        </div>

                    </div>

                    <p>If you don't have an account please <Link className='text-xl text-amber-500' to={'/register'}>Register</Link></p>

                </form>
            </div>
        </section>
    );
};

export default Login;