import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import postsData from '../data/posts.json';
import './Study.css';

const StudyList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Accordion State for Categories
  const [expandedCats, setExpandedCats] = useState<string[]>([]);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  // Extract hierarchical categories
  const categoryTree = useMemo(() => {
    const tree: Record<string, string[]> = {};
    (postsData as any[]).forEach(p => {
      const cat = p.category as string;
      if (cat && cat.includes('/')) {
        const [parent, ...rest] = cat.split('/');
        const child = rest.join('/'); // Handing multiple layers if any
        if (!tree[parent]) tree[parent] = [];
        if (!tree[parent].includes(child)) tree[parent].push(child);
      } else {
        const parent = cat || 'Uncategorized';
        if (!tree[parent]) tree[parent] = [];
      }
    });
    return tree;
  }, []);

  // Filter posts based on category hierarchy and search query
  const filteredPosts = useMemo(() => {
    return (postsData as any[]).filter(post => {
      const cat = (post.category as string) || 'Uncategorized';
      
      // Match parent categories implicitly
      const matchesCategory = 
        selectedCategory === 'All' || 
        cat === selectedCategory || 
        cat.startsWith(selectedCategory + '/');
        
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleParentClick = (parent: string) => {
    setSelectedCategory(parent);
    setExpandedCats(prev => 
      prev.includes(parent) ? prev.filter(c => c !== parent) : [...prev, parent]
    );
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container study-container">
      <div className="study-layout">
        <div className="study-sidebar card">
          <h3 className="sidebar-title">Categories</h3>
          <ul className="category-list">
            <li>
              <button 
                className={`category-btn ${selectedCategory === 'All' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('All')}
              >
                All ({postsData.length})
              </button>
            </li>
            <hr className="category-divider" />
            {Object.keys(categoryTree).sort().map(parent => (
              <li key={parent} className="category-group">
                <button 
                  className={`category-btn parent-btn ${selectedCategory === parent ? 'active' : ''}`}
                  onClick={() => handleParentClick(parent)}
                >
                  <span className="category-name">{parent}</span>
                  {categoryTree[parent].length > 0 && (
                    <span className="expand-icon">{expandedCats.includes(parent) ? '▼' : '▶'}</span>
                  )}
                </button>
                {categoryTree[parent].length > 0 && (
                  <ul className={`subcategory-list ${expandedCats.includes(parent) ? 'expanded' : ''}`}>
                    <div className="subcategory-wrapper">
                      {categoryTree[parent].sort().map(child => {
                        const fullCat = `${parent}/${child}`;
                        return (
                          <li key={child}>
                            <button 
                              className={`category-btn child-btn ${selectedCategory === fullCat ? 'active' : ''}`}
                              onClick={() => setSelectedCategory(fullCat)}
                            >
                              - {child}
                            </button>
                          </li>
                        );
                      })}
                    </div>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="study-main card">
          <div className="study-header">
            <h2 className="section-title">Study Content</h2>
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search posts..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <div className="post-list">
            {displayedPosts.length > 0 ? (
              displayedPosts.map(post => (
                <div key={post.id} className="post-card">
                  <div className="post-card-content">
                    <Link to={`/study/${post.id}`}>
                      <h3 className="post-title">{post.title}</h3>
                    </Link>
                    <div className="post-meta">
                      <span className="post-category">{post.category || 'Uncategorized'}</span>
                      <span className="meta-divider">&middot;</span>
                      <span className="post-date">{post.date}</span>
                    </div>
                    <p className="post-excerpt">{post.excerpt}</p>
                  </div>
                  {post.thumbnail && (
                    <div className="post-thumbnail">
                      <img src={post.thumbnail.startsWith('/') ? import.meta.env.BASE_URL + post.thumbnail.slice(1) : post.thumbnail} alt={post.title} />
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="no-results">No posts found matching your search criteria.</div>
            )}
          </div>
          
          {totalPages > 1 && (
            <div className="pagination-container">
              <button 
                className="pagination-btn arrow-btn" 
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                title="First Page"
              >
                &laquo;
              </button>
              <button 
                className="pagination-btn arrow-btn" 
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1}
                title="Previous Page"
              >
                &lt;
              </button>
              
              <div className="pagination-numbers">
                {Array.from({ length: Math.min(8, totalPages - (Math.floor((currentPage - 1) / 8) * 8)) }, (_, i) => (Math.floor((currentPage - 1) / 8) * 8) + i + 1).map(page => (
                  <button 
                    key={page}
                    className={`pagination-btn number-btn ${currentPage === page ? 'active' : ''}`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button 
                className="pagination-btn arrow-btn" 
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages}
                title="Next Page"
              >
                &gt;
              </button>
              <button 
                className="pagination-btn arrow-btn" 
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                title="Last Page"
              >
                &raquo;
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudyList;
