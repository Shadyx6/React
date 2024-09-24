import React from 'react';
import 'flowbite-typography';

const Blog = ({ title, content, image }) => {
  return (
    <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
        <div className="author-section">
          <h3 className='text-black'></h3>
          <p></p>
        </div>
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl ">{title}</h1>
          </header>
          <div className="w-full h-64 overflow-hidden rounded-lg mb-6">
            <img className="object-cover w-full h-full" src={image} alt={title} />
          </div>
          <p dangerouslySetInnerHTML={{__html: content}} className="text-lg text-gray-700 leading-relaxed mb-6"></p>
        </article>
      </div>
    </main>
  );
};

export default Blog;
