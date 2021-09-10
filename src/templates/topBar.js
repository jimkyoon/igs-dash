import * as React from 'react';

import PageButton from '../components/pageButton';

const TopBar = ({ page, pages, setPage }) => {
  const styling = {
    background: '#eaaaaa',justifyContent:'space-evenly',
    padding: '20px',
    width: '100%',
  };

  return (
    <div style={styling}>
      {pages.map(p => <PageButton 
                        children={p[0].toUpperCase() + p.substring(1)} 
                        key={p} 
                        onClick={() => setPage(p)}
                        selected={p === page} 
                      />)}
    </div>
  );
};

export default TopBar;
