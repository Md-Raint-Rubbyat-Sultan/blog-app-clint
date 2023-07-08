import { } from 'react';
import { Link } from 'react-router-dom';

const NotLogin = () => {
    return (
        <section>
            <div className='flex flex-col-reverse items-center my-10 all-blogs'>

                {/* map will be apply */}

                <div className='m-5 p-6 blog-container'>
                    <h3 className='text-center text-3xl font-bold pb-5 blog-head'>Welcome To Rimi jhimi Blogs</h3>
                    <p className='text-lg'>Hi! it's rimi. In this site I will post my daily blogs. Sometimes it will be some interesting story related or maybe not related to me. Thanks to visit my site...</p>
                </div>

            </div>
            <div>
                <p className='text-center text-xl cursor-pointer text-blue-600 mb-10'>
                    <Link to={'/blog'}>See more of my Blogs.</Link>
                </p>
            </div>
        </section>
    );
};

export default NotLogin;