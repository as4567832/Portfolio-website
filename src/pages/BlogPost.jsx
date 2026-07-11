import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa';
import { blogs } from '../data/blogs';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogs.find((b) => String(b.id) === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <Link to="/" className="text-primary hover:text-secondary transition-colors">Back to home</Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Link
            to="/"
            state={{ scrollTarget: 'blog' }}
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-8 text-sm font-medium"
          >
            <FaArrowLeft /> Back to Blog
          </Link>

          <span className="text-secondary font-semibold bg-secondary/10 px-3 py-1 rounded-md text-xs">{post.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
            <span>{post.date}</span>
            <span>&middot;</span>
            <span>{post.readTime}</span>
          </div>

          <img src={post.image} alt={post.title} className="w-full rounded-2xl mb-10 max-h-96 object-cover" />

          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogPost;
