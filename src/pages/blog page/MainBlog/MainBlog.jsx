import { useContext } from 'react';
import BlogPost from '../BlogPost/BlogPost';
import { AuthProvider } from '../../../contexts/AuthContext/AuthContext';
import { FaPen, FaDumpster } from 'react-icons/fa';
import './MainBlog.css'

const MainBlog = () => {
    const {
        user
    } = useContext(AuthProvider);

    return (
        <section>
            <div className='flex flex-col-reverse items-center my-10 all-blogs'>

                {/* map will be apply */}

                <div className='m-5 p-6 blog-container relative'>
                    <h3 className='text-center text-3xl font-bold pb-5 blog-head'>Happy Birth Day To You Keya</h3>
                    <p className='text-lg'>Hey! Many many happy returns of the day...</p>
                    <span className=' absolute top-0 right-0 text-xl sm:text-sm text-amber-700 edit'>
                        <FaPen className='mb-4 cursor-pointer'></FaPen>
                    </span>
                    <span className=' absolute top-8 right-0 text-xl sm:text-sm text-amber-700 edit'>
                        <FaDumpster className='mb-4 cursor-pointer'></FaDumpster>
                    </span>
                </div>

            </div>
            {/* user.email === "mdranitrubbyatsultan@gmail.com" */}
            <BlogPost></BlogPost>
        </section>
    );
};

export default MainBlog;