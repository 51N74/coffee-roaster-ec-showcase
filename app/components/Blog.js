// components/Blog.js
import Link from 'next/link'

const Blog = ({ posts }) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold text-center mb-6">Latest Blog Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <figure>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-xl font-semibold">{post.title}</h3>
              <p className="text-gray-500 text-sm">{post.date}</p>
              <p className="text-base mt-2">{post.summary}</p>
              <div className="card-actions justify-center mt-4">
              <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
