import { notFound } from 'next/navigation';

const blogContent = {
    '1': 'JavaScript closures are a fundamental concept...',
    '2': 'React is a powerful JavaScript library for building user interfaces...',
    '3': 'Node.js is an open-source, cross-platform, JavaScript runtime environment...'
};

export default function BlogPost({ params }) {
    const { id } = params;

    if (!blogContent[id]) {
        notFound();
    }

    return (
        <div>
            <h1>Blog Post {id}</h1>
            <p>{blogContent[id]}</p>
            <a href="/Blogs">Back to Blog</a>
        </div>
    );
}
