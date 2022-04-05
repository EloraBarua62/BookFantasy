import React from 'react';

const Blog = () => {
    return (
        <div className='w-2/5 mx-auto mt-20'>
            <div>
                <h2 className='text-3xl text-center mb-5 font-semibold'>What is Contex API?</h2>
                <p>The Context API is used to
                    convey data from parent nodes to child nodes.
                    React programs may quickly create global variables
                    that can be communicated to other nodes by using the
                    context API. It's a unique method of passing along props
                    from grandparent to child to parent and so on. The Context API is a React feature that lets us switch out specified data. In a word, the Context API is used to communicate data with a variety of components without having to pass data through props explicitly.</p>
            </div>
            <div className='mt-10'>
                <h2 className='text-3xl text-center mb-5 font-semibold'>What is Semantic Tag?</h2>
                <p>The capacity of semantic tags to effectively express their meaning to both developers and browsers sets them apart. Each of these tags serves a specific purpose. Tags like form, table, and article are examples. Search engines and other user devices can utilize semantic tags to determine the importance and context of websites. Semantic tags make the code much easier to read. They also make the user experience more enjoyable.</p>
            </div>
        </div>
    );
};

export default Blog;