import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { AuthProvider } from '../../../contexts/AuthContext/AuthContext';
import { toast } from 'react-hot-toast';

const Register = () => {
    const {
        createAccount,
        emailVerification
    } = useContext(AuthProvider);

    const navigate = useNavigate();

    const handelRegisterForm = (e) => {
        e.preventDefault();
        const form = e.target;
        // const user = form.user.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(user, email, password);

        createAccount(email, password)
            .then(() => {
                navigate('/login');
                toast.success('Congratulation! You have been registered. Now Please Verify your email.')
                verifyUser();
            })
            .catch(er => toast.error(er.message))
    }

    const verifyUser = () => {
        emailVerification()
            .then(() => {
                toast.success('An verification email has been send, please check your email.',{duration:20000});
            })
            .catch(er => toast.error(er.message))
    }

    return (
        <section className='flex justify-center items-center my-12 mx-16'>
            <form onSubmit={handelRegisterForm} className='regFormOutLines p-8 sm:p-12'>

                <h3 className='text-3xl text-center md:text-4xl font-bold'>Register</h3>

                <div className='flex flex-col justify-center items-start my-10'>

                    <div>
                        <label className='md:text-2xl' htmlFor="user">
                            <input className='block  mb-10 py-2 px-4 inputField' id='user' name='user' type="user" placeholder='User Name' required />
                        </label>
                    </div>

                    <div>
                        <label className='md:text-2xl' htmlFor="email">
                            <input className='block  mb-10 py-2 px-4 inputField' id='email' name='email' type="email" placeholder='Enter you email' required />
                        </label>
                    </div>

                    <div>
                        <label className='md:text-2xl' htmlFor="password">
                            <input className='block py-2 px-4 mb-10 inputField' id='password' name='password' type="password" placeholder='Password' required />
                        </label>
                    </div>

                    <button className='font-bold py-3 px-10 bg-amber-500 text-white border-2 rounded-lg btn-hover' type='submit'>Register</button>

                </div>

                <p>If you already have an account please <Link className='text-amber-500 text-xl' to={'/login'}>Login</Link></p>

            </form>
        </section>
    );
};

export default Register;