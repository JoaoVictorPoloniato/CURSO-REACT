import React, { useState } from 'react';
import './styles.css';

export const PostCard = ({ title, body, id, cover }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  console.log('PostCard Data:', { title, body, id, cover });

  return (
    <div className={`post ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>{title}</h2>
        {isExpanded && <p>{body}</p>}
      </div>
    </div>
  );
};
