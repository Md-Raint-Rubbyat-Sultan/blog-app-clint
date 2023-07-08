import { } from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <section className='max-w-7xl mx-auto border-2 p-6'>
            <div className='flex justify-between items-center'>
                <h3 className='text-3xl md:text-5xl font-bold py-4 font-color'>Rimi Jhimi Blogs</h3>
                <img className='blog-img' src="https://i.ibb.co/p4XH5bj/blog-img.jpg" alt="blog-img" />
            </div>
            <div className='flex flex-col-reverse items-center'>
                <div className='my-5 p-6 blog-container'>
                    <h3 className='text-center text-3xl font-bold pb-5'>blog-1</h3>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut id officiis qui mollitia atque possimus fuga ipsa eaque unde, aliquam ullam? Laborum animi ut autem repellat dicta, et nihil?</p>
                </div>
            </div>
        </section>
    );
};

export default Blog;