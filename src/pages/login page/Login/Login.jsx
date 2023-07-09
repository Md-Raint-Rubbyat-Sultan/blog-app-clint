import { useContext } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../../contexts/AuthContext/AuthContext';
import { toast } from 'react-hot-toast';

const Login = () => {
    const {
        googleSingin,
        loginWithEmail,
        setLoader
    } = useContext(AuthProvider);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state?.from?.pathname || '/';

    const handelGoogleSingup = () => {
        googleSingin()
            .then(() => {
                navigate(from, { replace: true });
                toast.success('Successfully Login');
            })
            .catch(er => toast.error(er.message));
    }

    const handelLoginForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginWithEmail(email, password)
            .then((result) => {
                const user = result.user;
                if (user?.emailVerified) {
                    navigate(from, { replace: true })
                    toast.success('You have successfully Login.', { position: "bottom-right", });
                    toast.success('Please reload the site if you login the site for the first time. Thank You!', {
                        duration: 15000,
                        position: "bottom-right",
                    });
                }
                else {
                    toast.error('Your email is not verified. Please check your email and verify.')
                }
                console.log(user);
            })
            .catch(er => toast.error(er.message))
            .finally(setLoader(false))
    }

    return (
        <section className='flex flex-col-reverse sm:flex-row justify-evenly items-center sm:my-12 p-10'>
            <div>
                <img className='w-3/2 md:w-2/3 rounded-2xl mx-auto my-10 md:my-0' src="https://i.ibb.co/KmHwT0V/login-img.jpg" alt="login-img" />
            </div>
            <div>
                <form onSubmit={handelLoginForm} className='formOutLines p-12'>

                    <h3 className='text-3xl text-center md:text-4xl font-bold'>Login</h3>

                    <div className='flex flex-col justify-center items-start my-10'>

                        <div>
                            <label className='md:text-2xl' htmlFor="email">
                                <input className='block  mb-7 py-2 px-4 inputField' id='email' type="email" placeholder='Enter your email' required />
                            </label>
                        </div>

                        <div>
                            <label className='md:text-2xl' htmlFor="password">
                                <input className='block py-2 px-4 inputField' id='password' type="password" placeholder='Password' required />
                            </label>
                        </div>

                        <p className='text-amber-500 cursor-pointer my-7'><small>Forget Password</small></p>

                        <div className='flex flex-col justify-between items-center'>
                            <button type='submit' className='font-bold py-3 px-10 bg-amber-500 text-white border-2 rounded-lg btn-hover'>Login</button>
                            <p className='text-xl text-gray-400 my-3'>or</p>
                            <button onClick={handelGoogleSingup} type='button' className='font-bold py-3 px-10 bg-amber-500 text-white border-2 rounded-lg btn-hover'>Google</button>
                        </div>

                    </div>

                    <p>If you don't have an account please <Link className='text-xl text-amber-500' to={'/register'}>Register</Link></p>

                </form>
            </div>
        </section>
    );
};

export default Login;