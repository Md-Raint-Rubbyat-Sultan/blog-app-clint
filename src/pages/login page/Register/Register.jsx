import { } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
            <section className='flex justify-center items-center my-12 mx-16'>
                <form className='regFormOutLines p-8 sm:p-12'>

                    <h3 className='text-3xl text-center md:text-4xl font-bold'>Register</h3>

                    <div className='flex flex-col justify-center items-start my-10'>

                        <div>
                            <label className='md:text-2xl' htmlFor="user">
                                <input className='block  mb-10 py-2 px-4 inputField' id='user' type="user" placeholder='User Name' />
                            </label>
                        </div>

                        <div>
                            <label className='md:text-2xl' htmlFor="email">
                                <input className='block  mb-10 py-2 px-4 inputField' id='email' type="email" placeholder='Enter you email' />
                            </label>
                        </div>

                        <div>
                            <label className='md:text-2xl' htmlFor="password">
                                <input className='block py-2 px-4 mb-10 inputField' id='password' type="password" placeholder='Password' />
                            </label>
                        </div>

                        <button className='font-bold py-3 px-10 bg-amber-500 text-white border-2 rounded-lg btn-hover'>Register</button>

                    </div>

                    <p>If you already have an account please <Link className='text-amber-500' to={'/login'}>Login</Link></p>

                </form>
            </section>
    );
};

export default Register;