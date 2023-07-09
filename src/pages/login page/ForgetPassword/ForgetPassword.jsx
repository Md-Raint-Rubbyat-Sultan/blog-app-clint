import { useContext } from 'react';
import { AuthProvider } from '../../../contexts/AuthContext/AuthContext';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {

    const { resetPass } = useContext(AuthProvider);

    const navigate = useNavigate()

    const handelForget = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        // console.log(email)

        resetPass(email)
            .then(() => {
                navigate('/login')
                toast.success('An email has been send please check your emails.', { duration: 10000, position: 'top-center' })
            })
            .catch(er => toast.error(`something went wrong. ${er.message}`, { position: 'top-center' }))
    }
    return (
        <div className=' h-screen max-w-7xl flex justify-center items-center'>
            <div className='w-2/3 mx-auto'>
                <h3 className='text-center text-amber-500 text-3xl'>Reset Password</h3>
                <form onSubmit={handelForget} className='flex flex-col justify-center items-center'>
                    <input className='border-2 border-amber-500 outline-2 outline-red-400  rounded-xl py-2 px-2 w-2/3' type="email" name="email" id="" placeholder='Please Enter Your Email' required />
                    <button className='font-bold py-2 px-5 bg-amber-500 text-white border-2 rounded-lg btn-hover my-4' type="submit">Rest Password</button>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;