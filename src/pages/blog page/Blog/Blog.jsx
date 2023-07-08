import { } from 'react';
import './Blog.css';
import BlogHead from '../BlogHead/BlogHead';
import MainBlog from '../MainBlog/MainBlog';

const Blog = () => {
    return (
        <section className='max-w-7xl mx-auto border-2 p-6'>
            <BlogHead></BlogHead>
            <MainBlog></MainBlog>
        </section>
    );
};

export default Blog;