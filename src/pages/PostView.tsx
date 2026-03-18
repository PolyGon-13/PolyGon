import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'; // Premium dark theme for code blocks
import postsData from '../data/posts.json';
import './Study.css';

const PostView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const foundPost = (postsData as any[]).find(p => p.id === parseInt(id, 10));
      setPost(foundPost);
    }
  }, [id]);

  useEffect(() => {
    if (post) {
      // Apply syntax highlighting after render
      setTimeout(() => {
        document.querySelectorAll('pre code').forEach((block) => {
          const pre = block.parentElement;
          if (pre && pre.getAttribute('data-ke-language')) {
            block.classList.add('language-' + pre.getAttribute('data-ke-language'));
          } else if (pre && pre.className) {
            // Some tistory blocks just have class="bash"
            block.classList.add('language-' + pre.className.replace('shell', 'bash'));
          }
          hljs.highlightElement(block as HTMLElement);
        });
      }, 0);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="container">
        <div className="card">
          <h2>Post not found</h2>
          <Link to="/study" className="btn btn-outline" style={{ marginTop: '16px' }}>Back to Study</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container post-container">
      <div className="post-view card">
        <div className="post-header">
          <Link to="/study" className="back-link">&larr; Back to List</Link>
          <h1 className="post-view-title">{post.title}</h1>
          <div className="post-view-meta">
            <span className="post-category">{post.category}</span>
            <span className="meta-divider">&middot;</span>
            <span className="post-date">{post.date}</span>
          </div>
        </div>
        <hr className="divider" />
        
        {/* Injecting original Tistory HTML safely */}
        <div 
          className="post-content contents_style"
          dangerouslySetInnerHTML={{ __html: post.content }} 
        />
      </div>
    </div>
  );
};

export default PostView;
