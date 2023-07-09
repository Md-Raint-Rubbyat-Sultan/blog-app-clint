import { useContext } from 'react';
import BlogPost from '../BlogPost/BlogPost';
import { AuthProvider } from '../../../contexts/AuthContext/AuthContext';

const MainBlog = () => {
    const {
        user
    } = useContext(AuthProvider);

    return (
        <section>
            <div className='flex flex-col-reverse items-center my-10 all-blogs'>

                {/* map will be apply */}

                <div className='m-5 p-6 blog-container'>
                    <h3 className='text-center text-3xl font-bold pb-5 blog-head'>Happy Birth Day To You Keya</h3>
                    <p className='text-lg'>Hey! Many many happy returns of the day...</p>
                </div>

            </div>
            {/* user.email === "mdranitrubbyatsultan@gmail.com" */}
            {
                user.email ?
                    <BlogPost></BlogPost>
                    :
                    ''
            }
        </section>
    );
};

export default MainBlog;