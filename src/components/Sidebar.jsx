import React, { useState } from 'react';

const Sidebar = () => {
  const [highlightedItem, setHighlightedItem] = useState(null);

  return (
    <div className="sidebar">
      <div className="logo">SOLINGIOT</div>
      <nav>
        <ul>
          <li 
            onMouseEnter={() => setHighlightedItem('Dashboard')} 
            onMouseLeave={() => setHighlightedItem(null)}
            style={{ backgroundColor: highlightedItem === 'Dashboard' ? 'blue' : 'transparent' }}
          >
            Dashboard
          </li>
          <li 
            onMouseEnter={() => setHighlightedItem('Recent')} 
            onMouseLeave={() => setHighlightedItem(null)}
            style={{ backgroundColor: highlightedItem === 'Recent' ? 'blue' : 'transparent' }}
          >
            Recent
          </li>
          <li 
            onMouseEnter={() => setHighlightedItem('Bookmark')} 
            onMouseLeave={() => setHighlightedItem(null)}
            style={{ backgroundColor: highlightedItem === 'Bookmark' ? 'blue' : 'transparent' }}
          >
            Bookmark
          </li>
          <li 
            onMouseEnter={() => setHighlightedItem('Downloaded')} 
            onMouseLeave={() => setHighlightedItem(null)}
            style={{ backgroundColor: highlightedItem === 'Downloaded' ? 'blue' : 'transparent' }}
          >
            Downloaded
          </li>
          <li 
            onMouseEnter={() => setHighlightedItem('Support')} 
            onMouseLeave={() => setHighlightedItem(null)}
            style={{ backgroundColor: highlightedItem === 'Support' ? 'blue' : 'transparent' }}
          >
            Support
          </li>
          <li 
            onMouseEnter={() => setHighlightedItem('Setting')} 
            onMouseLeave={() => setHighlightedItem(null)}
            style={{ backgroundColor: highlightedItem === 'Setting' ? 'blue' : 'transparent' }}
          >
            Setting
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
