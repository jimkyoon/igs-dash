import * as React from 'react';

import PageButton from '../components/pageButton';

const Left = ({ setPage }) => {
  const pages = ['articles', 'greetings', 'sounds', 'stories',];

  return (
    <div style={{height: '100%', width: '30%', border: '1px black solid'}}>
      {pages.map(page => <PageButton key={page} onClick={() => setPage(page)} children={page[0].toUpperCase() + page.substring(1)} />)}
    </div>
  )
}

export default Left;
