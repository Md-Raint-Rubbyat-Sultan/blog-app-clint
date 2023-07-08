import { } from 'react';

const BlogPost = () => {
    return (
        <div className='flex flex-col justify-center mx-5 p-6 border-2 rounded-lg postArea'>
            <input type="text" placeholder='Blog title' />
            <textarea className='p-4 my-8' name="blog" id="blog" cols="30" rows="5" placeholder='Type your Blog' />
            <div>
                <button className='postBtn'>Post Blog</button>
            </div>
        </div>
    );
};

export default BlogPost;