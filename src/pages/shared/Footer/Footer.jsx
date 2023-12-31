import { useContext } from 'react';
import { AuthProvider } from '../../../contexts/AuthContext/AuthContext';
import { toast } from 'react-hot-toast';

const Footer = () => {
    const { user, setUser, deleteProfile, setLoader } = useContext(AuthProvider)

    const handelDelete = () => {
        const agree = window.confirm("Are you sure you want to delete your account?")

        if (agree) {
            deleteProfile()
                .then(() => {
                    toast.success('Your profile has been deleted.')
                    setUser(null)
                })
                .catch(er => toast.error(`Something went wrong ${er.message}`))
                .finally(setLoader(false))
        }
        else {
            toast.success("Account is save now")
        }
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