import * as React from 'react';

import PostSelector from '../components/postSelctor';

const LeftSide = ({ list, postId, setPostId }) => {
  const styling = {
    borderRight: '1px solid black',
    justifyContent:'space-evenly',
    height: '100%',
    overflow: 'auto',
    padding: '20px',
    width: '30%'
  };

  return (
    <div style={styling}>
      {list.map(li => (
        <PostSelector
          key={li.key}
          children={li.message}
          selected={li.key === postId}
          onClick={() => setPostId(li.key)}
        />
      ))}
    </div>
  );
};

export default LeftSide;
