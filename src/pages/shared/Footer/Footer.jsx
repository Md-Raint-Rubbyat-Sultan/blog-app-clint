import { useContext } from 'react';
import { AuthProvider } from '../../../contexts/AuthContext/AuthContext';
import { toast } from 'react-hot-toast';

const Footer = () => {
    const { user,deleteProfile } = useContext(AuthProvider)

    const handelDelete = ()=>{
        deleteProfile()
        .then(()=>{
            toast.success('Your profile has been deleted.')
        })
        .catch(er=> toast.error(`Something went wrong ${er.message}`))
    }

    return (
        <footer className='bg-stone-700 p-20'>
            <p className='text-center font-bold text-white'>&copy; 2023 @borno Production</p>
            {
                user?.uid &&
                <p onClick={handelDelete} className='text-center font-bold text-white mt-6 mx-auto p-3 w-60 border-2 border-red-600 cursor-pointer hover:text-red-600'>Delete Your Account</p>
            }
        </footer>
    );
};

export default Footer;