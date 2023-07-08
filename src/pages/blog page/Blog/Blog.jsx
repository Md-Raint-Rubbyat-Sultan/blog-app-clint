import { } from 'react';
import './Blog.css';
import BlogHead from '../BlogHead/BlogHead';
import BlogPost from '../BlogPost/BlogPost';

const Blog = () => {
    return (
        <section className='max-w-7xl mx-auto border-2 p-6'>
            <BlogHead></BlogHead>

            <div className='flex flex-col-reverse items-center my-10 all-blogs'>

                {/* map will be apply */}

                <div className='m-5 p-6 blog-container'>
                    <h3 className='text-center text-3xl font-bold pb-5 blog-head'>blog-1</h3>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ut id officiis qui mollitia atque possimus fuga ipsa eaque unde, aliquam ullam? Laborum animi ut autem repellat dicta, et nihil?</p>
                </div>

            </div>

           <BlogPost></BlogPost>
        </section>
    );
};

export default Blog;