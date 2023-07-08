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
                    <h3 className='text-center text-3xl font-bold pb-5 blog-head'>blog-1</h3>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut id officiis qui mollitia atque possimus fuga ipsa eaque unde, aliquam ullam? Laborum animi ut autem repellat dicta, et nihil?</p>
                </div>

            </div>
            {
                user.email === "mdranitrubbyatsultan@gmail.com" ?
                    <BlogPost></BlogPost>
                    :
                    ''
            }
        </section>
    );
};

export default MainBlog;